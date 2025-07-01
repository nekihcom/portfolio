import { Work } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

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

        {/* 作品ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {work.title}
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            {work.description}
          </p>
          
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(work.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            {work.technologies && work.technologies.length > 0 && (
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span className="text-sm">技術スタック</span>
              </div>
            )}
          </div>

          {/* 技術スタック */}
          {work.technologies && work.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {work.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* リンクボタン */}
          <div className="flex flex-wrap gap-4 mb-8">
            {work.url && (
              <Link href={work.url} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  デモを見る
                </Button>
              </Link>
            )}
            {work.github && (
              <Link href={work.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* サムネイル画像 */}
        {work.thumbnail && (
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="relative h-96">
                <Image 
                  src={work.thumbnail.url} 
                  alt={work.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* 作品詳細 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">作品詳細</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {work.body ? (
                <div 
                  className="text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: work.body }}
                />
              ) : (
                <div className="text-slate-700 leading-relaxed">
                  <p>詳細情報が利用できません。</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 作品フッター */}
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