import { fetchBlogPost, fetchBlogPosts } from "@/lib/fetchBlogData";
import { BlogDetailSection } from "@/components/sections/BlogDetailSection";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * ブログ詳細ページ
 * @param params - URLパラメータ（記事ID）
 */
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = await fetchBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <BlogDetailSection post={post} />
    </main>
  );
}

/**
 * 静的パスを生成する関数
 * ビルド時に既存のブログ記事のパスを生成
 */
export async function generateStaticParams() {
  try {
    const posts = await fetchBlogPosts(50); // 最大50件の記事パスを生成
    return posts.map((post) => ({
      id: post.id,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1時間（3600秒）ごとに再生成
 */
export const revalidate = 3600; 