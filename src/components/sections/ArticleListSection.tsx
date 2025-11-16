import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/components/common/SectionTitle";
import { loadArticlesFromJson } from "@/services/unified-articles";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getSourceLabel(source: "note" | "qiita"): string {
  return source === "note" ? "note" : "Qiita";
}

export async function ArticleListSection() {
  const articles = await loadArticlesFromJson();

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <SectionTitle>記事一覧</SectionTitle>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.uuid}>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-sm border-b border-black/10 pb-4 transition-colors hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
            >
              <time className="shrink-0 text-sm dark:text-white/50">
                {formatDate(article.updatedAt)}
              </time>
              <div className="flex flex-1 items-center gap-3">
                {article.thumbnailUrl && (
                  <div className="hidden shrink-0 sm:block sm:w-24">
                    <Image
                      src={article.thumbnailUrl}
                      alt={article.title}
                      width={96}
                      height={54}
                      className="h-auto w-full rounded object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {getSourceLabel(article.source)}
                    </span>
                    <span className="flex-1 text-base group-hover:dark:text-white dark:group-hover:text-white/60 sm:text-lg">
                      {article.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

