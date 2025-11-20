import Link from "next/link";
import Image from "next/image";
import type { UnifiedArticle } from "@/types/type";
import { getArticleSourceMeta } from "@/constants/article-sources";
import { NewBadge } from "./NewBadge";

interface ArticleCardProps {
  article: UnifiedArticle;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isWithin7Days(dateString: string): boolean {
  const articleDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  articleDate.setHours(0, 0, 0, 0);
  const diffTime = today.getTime() - articleDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 7;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const sourceMeta = getArticleSourceMeta(article.source);

  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-lg p-[2px] shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      {/* カード内容 */}
      <div className="flex flex-1 flex-col gap-3 rounded-lg bg-white p-4 dark:bg-gray-800">
        {/* サムネイル画像 */}
        {article.thumbnailUrl && (
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={article.thumbnailUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              unoptimized
            />
          </div>
        )}
        {/* タイトル */}
        <h3 className="line-clamp-3 flex-1 text-base font-bold leading-tight text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200">
          {article.title}
        </h3>
        {/* 更新日と情報元ロゴ */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <time className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(article.updatedAt)}
            </time>
            {isWithin7Days(article.updatedAt) && <NewBadge />}
          </div>
          <Image
            src={sourceMeta.iconPath}
            alt={sourceMeta.label}
            width={24}
            height={24}
            className="h-6 w-auto"
          />
        </div>
      </div>
    </Link>
  );
}

