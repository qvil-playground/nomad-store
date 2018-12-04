import Link from "next/link";

export default ({ title }) => (
  <Link href={`/post?title=${title}`} as={`/post/${title}`}>
    <a>{title}</a>
  </Link>
);
