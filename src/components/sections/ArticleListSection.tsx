import Link from "next/link";
import type { NoteArticle } from "@/types/type";

interface ArticleListSectionProps {
  title: string;
  articles: NoteArticle[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleListSection({
  title,
  articles,
}: ArticleListSectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-black dark:text-white sm:text-2xl">
        {title}
      </h2>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-sm border-b border-black/10 pb-4 transition-colors hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
            >
              <time className="shrink-0 text-sm text-black/50 dark:text-white/50">
                {formatDate(article.publishedAt)}
              </time>
              <span className="flex-1 text-base text-black group-hover:text-black/60 dark:text-white dark:group-hover:text-white/60 sm:text-lg">
                {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

