import { PageTitle } from "@/components/common/PageTitle";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { loadArticlesFromJson } from "@/services/unified-articles";

export default async function ArticlesPage() {
  const articles = await loadArticlesFromJson();

  return (
    <div className="min-h-screen dark:bg-black">
      <PageTitle>ARTICLES</PageTitle>
      <main className="px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <ArticleListSection
          articles={articles}
          itemsPerRow={3}
          showSectionTitle={false}
        />
      </main>
    </div>
  );
}

