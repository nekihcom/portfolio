import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

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
    <Card className={`group h-full flex flex-col bg-white/90 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-500 cursor-pointer max-w-[370px] overflow-hidden ${className}`}>
      {/* サムネイル画像 */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden flex-shrink-0 relative">
        {post.thumbnail ? (
          <Image 
            src={post.thumbnail.url} 
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📝</div>
              <span className="text-gray-600 text-sm">No Image</span>
            </div>
          </div>
        )}
        {/* オーバーレイ効果 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* 日付バッジ（画像上） */}
        {/* <div className="absolute top-3 right-3">
          <div className="bg-teal-500/90 text-white text-xs px-3 py-1 rounded-full">
            {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div> */}
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        {/* カードヘッダー */}
        <CardHeader className="flex-1 p-0 mb-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <CardTitle className="text-xl text-gray-900 group-hover:text-teal-700 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                {post.title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        {/* カードフッター */}
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-teal-600 transition-colors">
              <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
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