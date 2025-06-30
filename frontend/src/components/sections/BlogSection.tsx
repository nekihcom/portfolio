import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/features/BlogCard";
import { BlogPost } from "@/types/type";
import Link from "next/link";

interface BlogSectionProps {
  posts?: BlogPost[];
  title?: string;
  viewAllButtonText?: string;
  className?: string;
}

/**
 * ブログセクションコンポーネント
 * ブログ記事一覧を表示し、データがない場合は執筆中メッセージを表示
 * 
 * @param posts - ブログ記事情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param className - 追加のCSSクラス
 */
export function BlogSection({
  posts = [],
  title = "最新のブログ記事",
  viewAllButtonText = "すべて見る",
  className = ""
}: BlogSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
        <Link href="/blog">
          <Button variant="outline">
            {viewAllButtonText}
          </Button>
        </Link>
      </div>
      
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="h-full">
              <BlogCard post={post} className="pt-0" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">✍️</div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">執筆中</h3>
          <p className="text-slate-500">記事の執筆を進めています。もうしばらくお待ちください。</p>
        </div>
      )}
    </section>
  );
} 