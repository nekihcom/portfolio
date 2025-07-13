import { Work } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { BlogContent } from "@/components/features/BlogContent";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

interface WorkDetailSectionProps {
  work: Work;
  className?: string;
}

/**
 * 作品詳細セクションコンポーネント
 * 
 * @param work - 作品情報
 * @param className - 追加のCSSクラス
 */
export function WorkDetailSection({ work, className = "" }: WorkDetailSectionProps) {
  return (
    <SectionBackground className={className}>
      <div className="max-w-[960px] mx-auto">
        {/* 戻るボタン */}
        <ScrollAnimation animationType="slide-left" delay={0.1}>
          <div className="mb-8">
            <Link href="/work">
              <Button 
                variant="outline" 
                className="mb-4 group bg-white/90 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>他の作品も見てみる</span>
                </span>
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        {/* 作品ヘッダーと詳細 */}
        <ScrollAnimation 
          animationType="slide-up" 
          delay={0.2}
          rootMargin="0px 0px -50px 0px"
        >
          <div className="mb-12">
            <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* 作品ヘッダー部分 */}
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {work.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {work.description}
                </p>
                
                {/* メタ情報 */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <span className="text-lg font-medium">
                      {new Date(work.publishedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  {work.technologies && work.technologies.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💻</span>
                      <span className="text-lg font-medium">技術スタック</span>
                    </div>
                  )}
                </div>

                {/* 技術スタック */}
                {work.technologies && work.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 transition-colors px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* リンクボタン */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {work.url && (
                    <Link href={work.url} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <span className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>デモを見る</span>
                        </span>
                      </Button>
                    </Link>
                  )}
                  {work.github && (
                    <Link href={work.github} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </span>
                      </Button>
                    </Link>
                  )}
                </div>

                {/* サムネイル画像 */}
                {work.thumbnail && (
                  <div className="mb-0 relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={work.thumbnail.url} 
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* 作品詳細部分 */}
              <div className="px-8 pb-8 md:px-12 md:pb-12">
                {work.body ? (
                  <BlogContent content={work.body} />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎨</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">詳細情報が利用できません</h3>
                    <p className="text-gray-600">申し訳ございませんが、作品の詳細情報を表示できませんでした。</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* 作品フッター */}
        <ScrollAnimation 
          animationType="slide-up" 
          delay={0.4}
          rootMargin="0px 0px -50px 0px"
        >
          <div className="text-center">
            <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">この作品はいかがでしたか？</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                他の作品もぜひご覧ください。技術的な挑戦や制作の記録を共有しています。
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
                <Link href="/work">
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <span>🎨</span>
                      <span>他の作品を見る</span>
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