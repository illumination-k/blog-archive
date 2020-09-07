import Link from "next/link";
import Layout from "../components/Layout";
import { getNames } from "../lib/contentLoader";
// import Image from "/images/lighthouse-wordpress-top"

export const config = { amp: true };

const Archive = (props) => {
  const { posts } = props;
  const links = posts.map((path, idx) => (
    <li key={idx}>
      <Link href={`/posts/${path}`}>
        <a>{path}</a>
      </Link>
    </li>
  ));

  return (
    <Layout>
      <ul>{links}</ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const mdxNames = await getNames();

  return {
    props: {
      posts: mdxNames,
    },
  };
}

export default Archive;
