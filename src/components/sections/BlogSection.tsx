import { BlogCard } from "@/components/features/BlogCard";
import { BlogPost } from "@/types/type";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ViewAllButton } from "@/components/ui/ViewAllButton";
import { EmptyState } from "@/components/ui/EmptyState";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

interface BlogSectionProps {
  posts?: BlogPost[];
  title?: string;
  viewAllButtonText?: string;
  className?: string;
  maxCount?: number;
  isDisplaySectionTtl?: boolean;
}

/**
 * ブログセクションコンポーネント
 * ブログ記事一覧を表示し、データがない場合は執筆中メッセージを表示
 * 
 * @param posts - ブログ記事情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param className - 追加のCSSクラス
 * @param maxCount - 表示する記事の最大件数
 */
export function BlogSection({
  posts = [],
  title = "Blog",
  viewAllButtonText = "すべて見る",
  className = "",
  maxCount,
  isDisplaySectionTtl = true
}: BlogSectionProps) {
  const displayPosts = maxCount ? posts.slice(0, maxCount) : posts;
  
  return (
    <SectionBackground className={className}>
      {/* セクションヘッダー */}
      {isDisplaySectionTtl && (
        <AnimatedSection delay={0.2}>
          <ScrollAnimation animationType="slide-up" delay={0.1}>
            <SectionHeader
            title={title}
            description="技術的な学びや開発の記録を共有しています 🚀"
            leftEmoji="📝"
            rightEmoji="💡"
            />
          </ScrollAnimation>
        </AnimatedSection>
      )}
      
      {displayPosts.length > 0 ? (
        <>
          <AnimatedSection delay={0.4}>
            <ScrollAnimation animationType="fade-in" delay={0.2}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                {displayPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="group"
                  >
                    <BlogCard post={post} className="group-hover:scale-105 transition-transform duration-500 pt-0" index={index} />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </AnimatedSection>

          {/* ボタンエリア */}
          {viewAllButtonText && viewAllButtonText !== "" && (
            <AnimatedSection delay={0.6}>
              <ScrollAnimation animationType="scale-in" delay={0.3}>
                <ViewAllButton
                  href="/blog"
                  text={viewAllButtonText}
                  emoji="📚"
                />
              </ScrollAnimation>
            </AnimatedSection>
          )}
        </>
      ) : (
        <AnimatedSection delay={0.4}>
          <ScrollAnimation animationType="slide-up" delay={0.2}>
            <EmptyState
              emoji="✍️"
              title="執筆中です"
              description="素晴らしい記事を準備しています。もうしばらくお待ちください ✨"
              subText="Coming Soon..."
              leftIcon="📖"
            />
          </ScrollAnimation>
        </AnimatedSection>
      )}
    </SectionBackground>
  );
} 