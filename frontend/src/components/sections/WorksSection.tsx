import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/features/WorkCard";
import { Work } from "@/types/type";

interface WorksSectionProps {
  works?: Work[];
  title?: string;
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
  className?: string;
}

/**
 * 作品セクションコンポーネント
 * 作品一覧を表示し、データがない場合は準備中メッセージを表示
 * 
 * @param works - 作品情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param onViewAllClick - 「すべて見る」ボタンクリック時のコールバック
 * @param className - 追加のCSSクラス
 */
export function WorksSection({
  works = [],
  title = "最近の作品",
  viewAllButtonText = "すべて見る",
  onViewAllClick,
  className = ""
}: WorksSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
        <Button variant="outline" onClick={onViewAllClick}>
          {viewAllButtonText}
        </Button>
      </div>
      
      {works.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">準備中</h3>
          <p className="text-slate-500">作品の準備を進めています。もうしばらくお待ちください。</p>
        </div>
      )}
    </section>
  );
} 