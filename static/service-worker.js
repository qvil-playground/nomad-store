self.addEventListener("install", event => {
  const offlinePage = new Request("/");
  event.waitUntil(
    fetch(offlinePage).then(res =>
      caches.open("nomad-store").then(cache => cache.put(offlinePage, res))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(error =>
      caches.open("nomad-store").then(cache => cache.match("/"))
    )
  );
});
// setInterval(() => {
//   console.log("service-worker.js");
// }, 1000);
