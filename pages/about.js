import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>About</title>
    </Head>
    <h1>About</h1>
  </div>
);

export default withLayout(About);
