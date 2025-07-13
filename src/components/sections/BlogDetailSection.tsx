import { BlogPost } from "@/types/type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BlogContent } from "@/components/features/BlogContent";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

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
    <SectionBackground className={className}>
      <div className="max-w-[960px] mx-auto">
        {/* 戻るボタン */}
        <ScrollAnimation animationType="slide-left" delay={0.1}>
          <div className="mb-8">
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="mb-4 group bg-white/90 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>他の記事も見てみる</span>
                </span>
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        {/* 記事ヘッダーと本文 */}
        <ScrollAnimation 
          animationType="slide-up" 
          delay={0.2}
          rootMargin="0px 0px -50px 0px"
        >
          <div className="mb-12">
            <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* 記事ヘッダー部分 */}
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <span className="text-lg font-medium">
                      {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <span className="text-lg font-medium">ブログ記事</span>
                  </div>
                </div>
                {post.thumbnail && (
                  <div className="mb-0 relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={post.thumbnail.url} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* 記事本文部分 */}
              <div className="px-8 pb-8 md:px-12 md:pb-12">
                {post.body ? (
                  <BlogContent content={post.body} />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📄</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">コンテンツが読み込めませんでした</h3>
                    <p className="text-gray-600">申し訳ございませんが、記事の内容を表示できませんでした。</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* 記事フッター */}
        <ScrollAnimation 
          animationType="slide-up" 
          delay={0.4}
          rootMargin="0px 0px -50px 0px"
        >
          <div className="text-center">
            <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">この記事はいかがでしたか？</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                他の記事もぜひご覧ください。技術的な学びや開発の記録を共有しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button 
                    variant="outline" 
                    className="group bg-white/90 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>トップページに戻る</span>
                    </span>
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <span>📚</span>
                      <span>他の記事を見る</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </SectionBackground>
  );
} 