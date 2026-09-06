import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/note";
import { formatDate } from "@/lib/format";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "実務で詰まったこと、判断に迷ったこと。技術の話も、そうでない話も。",
};

const PAGE_SIZE = 6;

function buildHref(page: number): string {
  return page > 1 ? `/blog?page=${page}` : "/blog";
}

export default async function BlogPage(props: PageProps<"/blog">) {
  const searchParams = await props.searchParams;
  const pageParam =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const posts = await getPosts();

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const currentPage = Math.min(
    Math.max(1, Number.isFinite(pageParam) ? pageParam : 1),
    totalPages,
  );
  const pagePosts = posts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      <section className="flex flex-col gap-4 px-6 py-10 pc:px-[120px] pc:pb-12 pc:pt-20">
        <h1 className="text-[34px] font-bold pc:text-[52px]">BLOG</h1>
      </section>

      <section className="border-t border-foreground px-6 pc:px-[120px]">
        {pagePosts.length === 0 && (
          <p className="py-10 text-base text-gray-sub">
            該当する記事がありません
          </p>
        )}
        {pagePosts.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </section>

      {totalPages > 1 && (
        <nav
          aria-label="ページネーション"
          className="flex justify-center gap-2 px-6 py-14 font-mono text-[13px] pc:gap-[10px] pc:py-16 pc:text-sm"
        >
          <Link
            href={buildHref(Math.max(1, currentPage - 1))}
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
              href={buildHref(page)}
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
            href={buildHref(Math.min(totalPages, currentPage + 1))}
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
