import { fetchBlogPosts } from "@/lib/fetchBlogData";
import { BlogListSection } from "@/components/sections/BlogListSection";

/**
 * ブログ一覧ページ
 */
export default async function BlogListPage() {
  const posts = await fetchBlogPosts(20); // 20件取得

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <BlogListSection posts={posts} />
    </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 30分（1800秒）ごとに再生成
 */
export const revalidate = 1800; 