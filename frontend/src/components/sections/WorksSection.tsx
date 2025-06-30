import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/features/WorkCard";
import { Work } from "@/types/type";
import Link from "next/link";

interface WorksSectionProps {
  works?: Work[];
  title?: string;
  viewAllButtonText?: string;
  className?: string;
}

/**
 * 作品セクションコンポーネント
 * 作品一覧を表示し、データがない場合は準備中メッセージを表示
 * 
 * @param works - 作品情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param className - 追加のCSSクラス
 */
export function WorksSection({
  works = [],
  title = "",
  viewAllButtonText = "すべて見る",
  className = ""
}: WorksSectionProps) {
  return (
    <section className={`container mx-auto px-4 pb-16 ${className}`}>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
        {viewAllButtonText && (
          <Link href="/work">
            <Button variant="outline">
              {viewAllButtonText}
            </Button>
          </Link>
        )}
      </div>
      
      {works.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} className="pt-0" />
          ))}
        </div>
      ) : (
        <div className="text-center pb-16">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">準備中</h3>
          <p className="text-slate-500">作品の準備を進めています。もうしばらくお待ちください。</p>
        </div>
      )}
    </section>
  );
} 