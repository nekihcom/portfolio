import Container from "@/components/common/Container";
import ArticleRowWithThumbnailListWithLoadMore from "@/components/features/article/ArticleRowWithThumbnailListWithLoadMore";
import { getArticlesList } from "@/services/article";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

const ArticleListPage = async () => {
  const articles = await getArticlesList(0);
  return (
    <>
      <Container className="py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Latest Article</h2>
        <ArticleRowWithThumbnailListWithLoadMore articles={articles} />
      </Container>
    </>
  );
};

export default ArticleListPage;