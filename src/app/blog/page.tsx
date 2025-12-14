import Container from "@/components/common/Container";
import { getBlogArticlesList } from "@/services/blog";
import BlogRowWithThumbnailListWithLoadMore from "@/components/features/blog/BlogRowWithThumbnailListWithLoadMore";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

const BlogListPage = async () => {
  const articles = await getBlogArticlesList(0);
  return (
    <>
      <Container className="py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <BlogRowWithThumbnailListWithLoadMore articles={articles} />
      </Container>
    </>
  );
};

export default BlogListPage;