import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/notion";
import { formatDate } from "@/lib/format";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "実務で詰まったこと、判断に迷ったこと。技術の話も、そうでない話も。",
};

const PAGE_SIZE = 6;

function buildHref(tag: string | undefined, page: number): string {
  const params = new URLSearchParams();
  if (tag) params.set("tag", tag);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default async function BlogPage(props: PageProps<"/blog">) {
  const searchParams = await props.searchParams;
  const tagParam =
    typeof searchParams.tag === "string" ? searchParams.tag : undefined;
  const pageParam =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const posts = await getPublishedPosts();

  const tagCounts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }
  const tags = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]);

  const filteredPosts = tagParam
    ? posts.filter((post) => post.tags.includes(tagParam))
    : posts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(
    Math.max(1, Number.isFinite(pageParam) ? pageParam : 1),
    totalPages,
  );
  const pagePosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      <section className="flex flex-col gap-4 px-6 py-10 pc:px-[120px] pc:pb-12 pc:pt-20">
        <span className="font-mono text-xs tracking-[0.08em] text-gray-label">
          BLOG
        </span>
        <h1 className="text-[34px] font-bold pc:text-[52px]">
          考えたことの記録
        </h1>
        <p className="text-sm leading-[1.8] text-gray-text pc:max-w-[680px] pc:text-base">
          実務で詰まったこと、判断に迷ったこと。技術の話も、そうでない話も。全{posts.length}
          記事。
        </p>
      </section>

      {tags.length > 0 && (
        <section className="flex flex-col gap-3 px-6 pb-9 pc:px-[120px] pc:pb-14">
          <span className="font-mono text-xs text-gray-label">
            FILTER BY TAG
          </span>
          <div className="flex flex-wrap gap-[10px] font-mono text-[13px]">
            <Link
              href={buildHref(undefined, 1)}
              className={
                !tagParam
                  ? "bg-foreground px-4 py-2 text-background"
                  : "border border-gray-border px-4 py-2 transition-colors duration-150 hover:border-foreground"
              }
            >
              All{" "}
              <span className={!tagParam ? "text-gray-disabled" : "text-gray-label"}>
                {posts.length}
              </span>
            </Link>
            {tags.map(([tag, count]) => {
              const isActive = tag === tagParam;
              return (
                <Link
                  key={tag}
                  href={buildHref(tag, 1)}
                  className={
                    isActive
                      ? "bg-foreground px-4 py-2 text-background"
                      : "border border-gray-border px-4 py-2 transition-colors duration-150 hover:border-foreground"
                  }
                >
                  {tag}{" "}
                  <span
                    className={isActive ? "text-gray-disabled" : "text-gray-label"}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="border-t border-foreground px-6 pc:px-[120px]">
        {pagePosts.length === 0 && (
          <p className="py-10 text-base text-gray-sub">
            該当する記事がありません
          </p>
        )}
        {pagePosts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className={`group flex flex-col gap-2 py-7 pc:grid pc:grid-cols-[200px_1fr] pc:gap-15 pc:py-10 ${
              index === pagePosts.length - 1
                ? ""
                : "border-b border-gray-divider"
            }`}
          >
            <div className="flex flex-col gap-2">
              {post.publishedAt && (
                <span className="font-mono text-[13px] text-gray-label">
                  {formatDate(post.publishedAt)}
                </span>
              )}
              <div className="flex flex-wrap gap-[6px]">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-border-weak px-2 py-1 font-mono text-[11px] text-gray-sub"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[19px] font-bold leading-[1.5] group-hover:text-accent pc:text-2xl">
                {post.title}
              </h2>
              {post.summary && (
                <p className="text-sm leading-[1.8] text-gray-sub pc:max-w-[860px] pc:text-[15px]">
                  {post.summary}
                </p>
              )}
            </div>
          </Link>
        ))}
      </section>

      {totalPages > 1 && (
        <nav
          aria-label="ページネーション"
          className="flex justify-center gap-2 px-6 py-14 font-mono text-[13px] pc:gap-[10px] pc:py-16 pc:text-sm"
        >
          <Link
            href={buildHref(tagParam, Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "flex h-11 w-11 items-center justify-center border border-gray-border-weak text-gray-disabled"
                : "flex h-11 w-11 items-center justify-center border border-gray-border transition-colors duration-150 hover:border-foreground"
            }
          >
            ←
          </Link>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={buildHref(tagParam, page)}
              className={
                page === currentPage
                  ? "flex h-11 w-11 items-center justify-center bg-foreground text-background"
                  : "flex h-11 w-11 items-center justify-center border border-gray-border transition-colors duration-150 hover:border-foreground"
              }
            >
              {page}
            </Link>
          ))}
          <Link
            href={buildHref(tagParam, Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "flex h-11 w-11 items-center justify-center border border-gray-border-weak text-gray-disabled"
                : "flex h-11 w-11 items-center justify-center border border-gray-border transition-colors duration-150 hover:border-foreground"
            }
          >
            →
          </Link>
        </nav>
      )}
    </div>
  );
}
