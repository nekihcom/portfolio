import { WorkCard } from "@/components/features/WorkCard";
import { Work } from "@/types/type";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ViewAllButton } from "@/components/ui/ViewAllButton";
import { EmptyState } from "@/components/ui/EmptyState";

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
  title = "Work",
  viewAllButtonText = "すべて見る",
  className = ""
}: WorksSectionProps) {
  return (
    <SectionBackground className={className}>
      {/* セクションヘッダー */}
      <SectionHeader
        title={title}
        description="これまでに制作した作品をご紹介します 🚀"
        leftEmoji="🎨"
        rightEmoji="✨"
      />

      {works.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {works.map((work, index) => (
              <div 
                key={work.id} 
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WorkCard work={work} className="pt-0 group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* ボタンエリア */}
          {viewAllButtonText && (
            <ViewAllButton
              href="/work"
              text={viewAllButtonText}
              emoji="👀"
            />
          )}
        </>
      ) : (
        <EmptyState
          emoji="🚧"
          title="準備中です"
          description="素晴らしい作品を準備しています。もうしばらくお待ちください ✨"
          subText="Coming Soon..."
        />
      )}
    </SectionBackground>
  );
} 