import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostRecordMap,
  getPublishedPosts,
} from "@/lib/notion";
import { PostRenderer } from "@/components/notion-renderer";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const recordMap = await getPostRecordMap(post.id);

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      {post.publishedAt && (
        <p className="mt-2 text-sm text-zinc-500">{post.publishedAt}</p>
      )}
      <div className="mt-10">
        <PostRenderer recordMap={recordMap} />
      </div>
    </article>
  );
}
