import { BlogPost } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface BlogDetailSectionProps {
  post: BlogPost;
  className?: string;
}

/**
 * ブログ記事詳細セクションコンポーネント
 * 
 * @param post - ブログ記事情報
 * @param className - 追加のCSSクラス
 */
export function BlogDetailSection({ post, className = "" }: BlogDetailSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← トップページに戻る
            </Button>
          </Link>
        </div>

        {/* 記事ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-600 mb-6">
            <span className="text-sm">
              {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          {post.thumbnail && (
            <div className="mb-6">
              <img 
                src={post.thumbnail.url} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* 記事本文 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.body ? (
                <div 
                  className="text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              ) : (
                <div className="text-slate-700 leading-relaxed">
                  <p>コンテンツが読み込めませんでした。</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 記事フッター */}
        <div className="text-center">
          <Link href="/">
            <Button variant="outline">
              ← トップページに戻る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 