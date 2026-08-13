import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/notion";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "ブログ記事の一覧です。",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="mx-auto w-full max-w-[960px] px-6 py-8 pc:py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="mt-10 flex flex-col gap-10">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="group block">
              {post.ogpImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.ogpImageUrl}
                  alt=""
                  className="mb-3 aspect-[1200/630] w-full rounded-lg object-cover"
                />
              )}
              <h2 className="text-xl font-medium group-hover:text-accent">
                {post.title}
              </h2>
              {post.publishedAt && (
                <p className="mt-1 text-sm text-foreground/60">
                  {post.publishedAt}
                </p>
              )}
              {post.summary && (
                <p className="mt-2 text-foreground/70">{post.summary}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
