import { fetchBlogPosts } from "@/lib/fetchBlogData";
import { BlogSection } from "@/components/sections/BlogSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * ブログ一覧ページ
 */
export default async function BlogListPage() {
  const posts = await fetchBlogPosts(20); // 20件取得

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto max-w-[1150px] px-4 py-16">
        {/* ページヘッダー */}
        <div>
          <Link href="/">
            <Button variant="outline" className="mb-20">
              ← トップページに戻る
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            技術的な学びや開発の記録を共有しています。
          </p>
        </div>
        <BlogSection posts={posts} title="" viewAllButtonText="" isDisplaySectionTtl={false} />
      </div>
    </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 30分（1800秒）ごとに再生成
 */
export const revalidate = 1800; 