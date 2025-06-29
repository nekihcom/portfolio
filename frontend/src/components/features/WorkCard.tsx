import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Work } from "@/types/type";
import Link from "next/link";

interface WorkCardProps {
  work: Work;
  className?: string;
}

/**
 * 作品情報を表示するカードコンポーネント
 * URLがある場合はクリック可能、ない場合は表示のみ
 * 
 * @param work - 作品情報
 * @param className - 追加のCSSクラス
 */
export function WorkCard({ work, className = "" }: WorkCardProps) {
  const cardContent = (
    <Card className={`hover:shadow-lg transition-shadow ${work.url ? 'cursor-pointer' : 'cursor-default'} ${className}`}>
      <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
        {work.thumbnail ? (
          <img 
            src={work.thumbnail.url} 
            alt={work.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
            <span className="text-slate-600 text-sm">No Image</span>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{work.title}</CardTitle>
        <CardDescription>{work.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {(work.technologies || []).map((tech, techIndex) => (
            <Badge key={techIndex} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        {work.url && (
          <div className="mt-3 text-xs text-slate-500">
            🔗 詳しく見てみる
          </div>
        )}
      </CardContent>
    </Card>
  );

  // URLがある場合はLinkでラップ、ない場合はそのまま表示
  if (work.url) {
    return (
      <Link 
        href={work.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
} 