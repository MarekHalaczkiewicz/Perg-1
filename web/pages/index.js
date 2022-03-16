import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Background from "../components/svgs/Background";
import Description from "../components/Description";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <Background />
        <div className="flex flex-col">
          <div className="flex place-content-center">
            <div className="px-2 mb-1 z-30">
              <p className="text-white bg-black text-xxs sm:bg-transparent text-transparent">
                /website under construction
              </p>
            </div>
          </div>
          <Menu />
          <Hero />
          <Description />
        </div>
        {/* <h1>
          My Blog and{" "}
          <Link href="/merch">
            <a>Merch Store</a>
          </Link>
        </h1> */}
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
