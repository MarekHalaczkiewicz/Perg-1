import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Background from "../components/svgs/Background";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <Background />
        <Menu />
        <Hero />
        {/* <h1>
          My Blog and{" "}
          <Link href="/merch">
            <a>Merch Store</a>
          </Link>
        </h1> */}

        <hr />
        <ul>
          {posts.map((p) => (
            <li key={p._id}>
              <Link href={`/posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(homeQuery);

  return {
    props: {
      posts,
    },
  };
}
