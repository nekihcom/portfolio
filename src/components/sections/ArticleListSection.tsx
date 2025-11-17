import { SectionTitle } from "@/components/common/SectionTitle";
import { ArticleCard } from "@/components/common/ArticleCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { loadArticlesFromJson } from "@/services/unified-articles";

const sectionTitle = "ARTICLES";

export async function ArticleListSection() {
  try {
    const articles = await loadArticlesFromJson();
    const displayedArticles = articles.slice(0, 4);

    if (displayedArticles.length === 0) {
      return (
        <SectionContainer sectionTitle={sectionTitle} className="space-y-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            記事がありません。
          </p>
        </SectionContainer>
      );
    }

    return (
      <SectionContainer sectionTitle={sectionTitle} className="space-y-6 mb-[150px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 @lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.uuid} article={article} />
          ))}
        </div>
      </SectionContainer>
    );
  } catch (error) {
    console.error("Failed to load articles:", error);
    return (
      <section className="space-y-6">
        <SectionTitle>{sectionTitle}</SectionTitle>
        <p className="text-sm text-red-500 dark:text-red-400">
          記事の読み込みに失敗しました。
        </p>
      </section>
    );
  }
}

