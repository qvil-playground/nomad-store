import Link from "next/link";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <h1>Index</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default withLayout(Index);
