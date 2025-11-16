import { SectionTitle } from "@/components/common/SectionTitle";
import { ArticleCard } from "@/components/common/ArticleCard";
import { loadArticlesFromJson } from "@/services/unified-articles";

export async function ArticleListSection() {
  try {
    const articles = await loadArticlesFromJson();
    const displayedArticles = articles.slice(0, 4);

    if (displayedArticles.length === 0) {
      return (
        <section className="space-y-6">
          <SectionTitle>記事一覧</SectionTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            記事がありません。
          </p>
        </section>
      );
    }

    return (
      <section className="space-y-6 mb-[150px]">
        <SectionTitle>記事一覧</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 @lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.uuid} article={article} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to load articles:", error);
    return (
      <section className="space-y-6">
        <SectionTitle>記事一覧</SectionTitle>
        <p className="text-sm text-red-500 dark:text-red-400">
          記事の読み込みに失敗しました。
        </p>
      </section>
    );
  }
}

