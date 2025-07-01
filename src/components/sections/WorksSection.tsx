import { WorkCard } from "@/components/features/WorkCard";
import { Work } from "@/types/type";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ViewAllButton } from "@/components/ui/ViewAllButton";
import { EmptyState } from "@/components/ui/EmptyState";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
      <AnimatedSection delay={0.2}>
        <SectionHeader
          title={title}
          description="これまでに制作した作品をご紹介します 🚀"
          leftEmoji="🎨"
          rightEmoji="✨"
        />
      </AnimatedSection>

      {works.length > 0 ? (
        <>
          <AnimatedSection delay={0.4}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
              {works.map((work, index) => (
                <div 
                  key={work.id} 
                  className="group"
                >
                  <WorkCard work={work} className="pt-0 group-hover:scale-105 transition-transform duration-500" index={index} />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ボタンエリア */}
          {viewAllButtonText && (
            <AnimatedSection delay={0.6}>
              <ViewAllButton
                href="/work"
                text={viewAllButtonText}
                emoji="👀"
              />
            </AnimatedSection>
          )}
        </>
      ) : (
        <AnimatedSection delay={0.4}>
          <EmptyState
            emoji="🚧"
            title="準備中です"
            description="素晴らしい作品を準備しています。もうしばらくお待ちください ✨"
            subText="Coming Soon..."
          />
        </AnimatedSection>
      )}
    </SectionBackground>
  );
} 