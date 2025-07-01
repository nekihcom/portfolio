import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Work } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

interface WorkCardProps {
  work: Work;
  className?: string;
  index?: number;
}

/**
 * 作品情報を表示するカードコンポーネント
 * 作品詳細ページへのリンクとして機能
 * 
 * @param work - 作品情報
 * @param className - 追加のCSSクラス
 * @param index - アニメーション遅延用のインデックス
 */
export function WorkCard({ work, className = "", index = 0 }: WorkCardProps) {
  const cardContent = (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <Card className={`group h-full flex flex-col bg-white/90 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-500 cursor-pointer max-w-[370px] overflow-hidden py-0`}>
        {/* サムネイル画像 */}
        <div className="w-full h-48 bg-gray-200 overflow-hidden flex-shrink-0 relative">
          {work.thumbnail ? (
            <Image 
              src={work.thumbnail.url} 
              alt={work.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <span className="text-gray-600 text-sm">No Image</span>
              </div>
            </div>
          )}
          {/* オーバーレイ効果 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* 技術スタックバッジ（画像上） */}
          {work.technologies && work.technologies.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
              {work.technologies.slice(0, 3).map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  className="bg-teal-500/90 text-white text-xs px-2 py-1 border-0"
                >
                  {tech}
                </Badge>
              ))}
              {work.technologies.length > 3 && (
                <Badge className="bg-gray-500/90 text-white text-xs px-2 py-1 border-0">
                  +{work.technologies.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* カードコンテンツ */}
        <CardHeader className="flex-1 p-6">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <CardTitle className="text-xl text-gray-900 group-hover:text-teal-700 transition-colors duration-300 mb-2">
                {work.title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                {work.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          {/* 技術スタック（詳細） */}
          {work.technologies && work.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {work.technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline" 
                  className="text-xs bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* アクションエリア */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-teal-600 transition-colors">
              <span>詳細を見る</span>
            </div>
            <div className="text-gray-400 group-hover:text-teal-500 transition-colors">
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 作品詳細ページへのリンク
  return (
    <Link 
      href={`/work/${work.id}`}
      className="block"
    >
      {cardContent}
    </Link>
  );
} 