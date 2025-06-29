import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/type";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  onClick?: () => void;
}

/**
 * ブログ記事情報を表示するカードコンポーネント
 * 
 * @param post - ブログ記事情報
 * @param className - 追加のCSSクラス
 * @param onClick - クリック時のコールバック関数
 */
export function BlogCard({ post, className = "", onClick }: BlogCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
        </div>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm text-slate-500">
          <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
          <span>5分</span>
        </div>
      </CardContent>
    </Card>
  );
} 