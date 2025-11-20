import { PageTitle } from "@/components/common/PageTitle";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { SourceFilter } from "@/components/common/SourceFilter";
import { loadArticlesFromJson } from "@/services/unified-articles";
import { isValidArticleSource } from "@/constants/article-sources";
import type { ArticleSourceId } from "@/constants/article-sources";

const DEFAULT_INITIAL_DISPLAY_COUNT = 12;
const DEFAULT_LOAD_MORE_COUNT = 12;

type SearchParams =
  | Promise<{ source?: string }>
  | { source?: string };

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allArticles = await loadArticlesFromJson();

  // Next.js 16では searchParams が Promise になる場合がある
  const resolvedSearchParams =
    searchParams instanceof Promise ? await searchParams : searchParams;

  // クエリパラメータの検証
  const sourceParam = resolvedSearchParams.source;
  const validSource: ArticleSourceId | undefined =
    sourceParam && isValidArticleSource(sourceParam) ? sourceParam : undefined;

  // フィルタリング
  const filteredArticles = validSource
    ? allArticles.filter((article) => article.source === validSource)
    : allArticles;

  return (
    <div className="min-h-screen dark:bg-black">
      <PageTitle>ARTICLES</PageTitle>
      <SourceFilter currentSource={validSource} />
      <main className="px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <ArticleListSection
          articles={filteredArticles}
          showSectionTitle={false}
          initialDisplayCount={DEFAULT_INITIAL_DISPLAY_COUNT}
          loadMoreCount={DEFAULT_LOAD_MORE_COUNT}
          detailLink={""}
          detailLinkLabel={""}
        />
      </main>
    </div>
  );
}

