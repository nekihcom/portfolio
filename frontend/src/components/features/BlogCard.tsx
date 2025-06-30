import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/type";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

/**
 * ブログ記事情報を表示するカードコンポーネント
 * ブログ詳細ページへのリンクとして機能
 * 
 * @param post - ブログ記事情報
 * @param className - 追加のCSSクラス
 */
export function BlogCard({ post, className = "pt-0" }: BlogCardProps) {
  const cardContent = (
    <Card className={`h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer max-w-[370px] ${className}`}>
      {/* サムネイル画像 */}
      <div className="w-full h-40 bg-slate-200 overflow-hidden flex-shrink-0">
        {post.thumbnail ? (
          <img 
            src={post.thumbnail.url} 
            alt={post.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
            <span className="text-slate-600 text-sm">No Image</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <CardHeader className="flex-1">
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
      </div>
    </Card>
  );

  // ブログ詳細ページへのリンク
  return (
    <Link 
      href={`/blog/${post.id}`}
      className="block h-full"
    >
      {cardContent}
    </Link>
  );
} 