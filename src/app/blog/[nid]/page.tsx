import BlogDetailContent from "@/components/features/blog/BlogDetailContent";
import { getBlogArticle } from "@/services/blog";
import Container from "@/components/common/Container";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

const BlogDetailPage = async ({ params }: { params: { nid: string } }) => {
  const { nid } = await params;
  const article = await getBlogArticle(nid);

  const content = article ? (
    <BlogDetailContent article={article} />
  ) : (
    <div className="text-center text-gray-500">
      <p>記事が見つかりませんでした。</p>
    </div>
  );

  return (
    <Container>
      {content}
    </Container>
  );
};

export default BlogDetailPage;