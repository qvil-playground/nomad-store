import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

export default withLayout(withRouter(Post));
