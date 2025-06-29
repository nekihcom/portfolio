import { BlogPost } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface BlogListSectionProps {
  posts: BlogPost[];
  className?: string;
}

/**
 * ブログ一覧セクションコンポーネント
 * 
 * @param posts - ブログ記事情報の配列
 * @param className - 追加のCSSクラス
 */
export function BlogListSection({ posts, className = "" }: BlogListSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* ページヘッダー */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← トップページに戻る
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            ブログ記事一覧
          </h1>
          <p className="text-lg text-slate-600">
            技術的な学びや開発の記録を共有しています
          </p>
        </div>

        {/* 記事一覧 */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                      </span>
                      <span>5分</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">執筆中</h3>
            <p className="text-slate-500">記事の執筆を進めています。もうしばらくお待ちください。</p>
          </div>
        )}
      </div>
    </section>
  );
} 