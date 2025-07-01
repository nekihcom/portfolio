import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * アニメーション付きセクションコンポーネント
 * ページ表示時のフェードインアニメーションを提供
 * 
 * @param children - 子要素
 * @param delay - アニメーション遅延時間（秒）
 * @param className - 追加のCSSクラス
 */
export function AnimatedSection({
  children,
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
} 