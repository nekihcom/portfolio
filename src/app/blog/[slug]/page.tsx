import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPostBySlug,
  getPostRecordMap,
  getPublishedPosts,
} from "@/lib/notion";
import { formatDate } from "@/lib/format";
import { PostRenderer } from "@/components/notion-renderer";
import { ArticleWithToc } from "@/components/table-of-contents";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.ogpImageUrl ? [post.ogpImageUrl] : undefined,
    },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const [recordMap, allPosts] = await Promise.all([
    getPostRecordMap(post.id),
    getPublishedPosts(),
  ]);

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex >= 0 ? allPosts[currentIndex + 1] : undefined;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      <nav
        aria-label="パンくず"
        className="px-6 pt-8 font-mono text-xs pc:px-[120px] pc:pt-14"
      >
        <Link href="/blog" className="text-foreground">
          Blog
        </Link>
        <span className="text-gray-border"> / </span>
        <span className="text-gray-label">{post.title}</span>
      </nav>

      <article className="flex flex-col gap-9 px-6 py-8 pc:grid pc:grid-cols-[1fr_260px] pc:items-start pc:gap-20 pc:px-[120px] pc:py-12">
        <header className="flex flex-col gap-4 border-b border-foreground pb-7 pc:col-span-2 pc:pb-9">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] text-gray-label">
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-border-weak px-2 py-1 text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[26px] font-bold leading-[1.5] pc:text-[42px] pc:leading-[1.4]">
            {post.title}
          </h1>
        </header>

        <ArticleWithToc>
          <PostRenderer recordMap={recordMap} />
        </ArticleWithToc>
      </article>

      {(prevPost || nextPost) && (
        <nav
          aria-label="前後の記事"
          className="grid grid-cols-1 border-t border-foreground px-6 pc:grid-cols-2 pc:px-[120px]"
        >
          <div className="border-b border-gray-divider py-6 pc:border-b-0 pc:border-r pc:py-9 pc:pr-10">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col gap-2"
              >
                <span className="font-mono text-xs text-gray-label">
                  ← PREV
                </span>
                <span className="text-base font-bold leading-[1.6] group-hover:text-accent pc:text-lg">
                  {prevPost.title}
                </span>
              </Link>
            )}
          </div>
          <div className="py-6 text-left pc:py-9 pc:pl-10 pc:text-right">
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col gap-2 pc:items-end"
              >
                <span className="font-mono text-xs text-gray-label">
                  NEXT →
                </span>
                <span className="text-base font-bold leading-[1.6] group-hover:text-accent pc:text-lg">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
