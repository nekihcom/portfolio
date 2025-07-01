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
 * 作品詳細ページへのリンクとして機能
 * 
 * @param work - 作品情報
 * @param className - 追加のCSSクラス
 */
export function WorkCard({ work, className = "" }: WorkCardProps) {
  const cardContent = (
    <Card className={`h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer max-w-[370px] ${className}`}>
      <div className="w-full h-40 bg-slate-200 overflow-hidden flex-shrink-0">
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
      <CardHeader className="flex-1">
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
        <div className="mt-3 text-xs text-slate-500">
          📖 詳細を見る
        </div>
      </CardContent>
    </Card>
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