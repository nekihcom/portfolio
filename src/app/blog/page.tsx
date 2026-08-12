import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="mt-10 flex flex-col gap-10">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-xl font-medium group-hover:underline">
                {post.title}
              </h2>
              {post.publishedAt && (
                <p className="mt-1 text-sm text-zinc-500">
                  {post.publishedAt}
                </p>
              )}
              {post.summary && (
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
