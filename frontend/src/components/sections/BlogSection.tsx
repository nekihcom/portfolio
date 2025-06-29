import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/features/BlogCard";
import { BlogPost } from "@/types/type";

interface BlogSectionProps {
  posts?: BlogPost[];
  title?: string;
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
  onPostClick?: (post: BlogPost) => void;
  className?: string;
}

/**
 * ブログセクションコンポーネント
 * ブログ記事一覧を表示し、データがない場合は執筆中メッセージを表示
 * 
 * @param posts - ブログ記事情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param onViewAllClick - 「すべて見る」ボタンクリック時のコールバック
 * @param onPostClick - 記事クリック時のコールバック
 * @param className - 追加のCSSクラス
 */
export function BlogSection({
  posts = [],
  title = "最新のブログ記事",
  viewAllButtonText = "すべて見る",
  onViewAllClick,
  onPostClick,
  className = ""
}: BlogSectionProps) {
  const handlePostClick = (post: BlogPost) => {
    if (onPostClick) {
      onPostClick(post);
    }
  };

  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
        <Button variant="outline" onClick={onViewAllClick}>
          {viewAllButtonText}
        </Button>
      </div>
      
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onClick={() => handlePostClick(post)}
            />
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