import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
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

export default async function DemoPage() {
  const articles = await loadArticlesFromJson();
  const generatedAt = dayjs().format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className="min-h-screen dark:bg-black">
      <main className="mx-auto w-full max-w-3xl px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold dark:text-white">統合記事一覧</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              最終更新: {generatedAt} ({articles.length}件)
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-gray-600 dark:text-gray-400">
                記事がまだ取得されていません。バッチ処理が実行されるまでお待ちください。
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {articles.map((article) => (
                <li
                  key={article.uuid}
                  className="group rounded-lg border border-black/10 bg-white p-6 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-gray-900"
                >
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {article.thumbnailUrl && (
                        <div className="shrink-0 sm:w-48">
                          <Image
                            src={article.thumbnailUrl}
                            alt={article.title}
                            width={192}
                            height={108}
                            className="h-auto w-full rounded object-cover"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {getSourceLabel(article.source)}
                          </span>
                          <time className="text-sm text-gray-600 dark:text-gray-400">
                            {formatDate(article.updatedAt)}
                          </time>
                        </div>
                        <h2 className="text-lg font-semibold group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {article.title}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {article.url}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
