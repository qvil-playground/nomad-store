import Link from "next/link";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <h1>Index</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
    <h1>Posts</h1>
    <ul>
      <li>
        <PostLink title="Higher Code" />
      </li>
      <li>
        <PostLink title="Awesome Code" />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
