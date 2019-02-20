const express = require("express");
const next = require("next");
const { resolve } = require("path");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/sw.js", (req, res) => {
      app.serveStatic(req, res, resolve("./static/service-worker.js"));
    });

    server.get("/post/:title", (req, res) => {
      const actualPage = "/post";
      const queryParam = { title: req.params.title };
      app.render(req, res, actualPage, queryParam);
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("Ready on http://localhost:3000/");
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
