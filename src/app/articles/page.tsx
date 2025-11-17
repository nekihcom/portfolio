import { PageTitle } from "@/components/common/PageTitle";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { loadArticlesFromJson } from "@/services/unified-articles";

const DEFAULT_INITIAL_DISPLAY_COUNT = 12;
const DEFAULT_LOAD_MORE_COUNT = 12;

export default async function ArticlesPage() {
  const articles = await loadArticlesFromJson();

  return (
    <div className="min-h-screen dark:bg-black">
      <PageTitle>ARTICLES</PageTitle>
      <main className="px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <ArticleListSection
          articles={articles}
          showSectionTitle={false}
          initialDisplayCount={DEFAULT_INITIAL_DISPLAY_COUNT}
          loadMoreCount={DEFAULT_LOAD_MORE_COUNT}
        />
      </main>
    </div>
  );
}

