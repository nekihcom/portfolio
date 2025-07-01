interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * セクション背景コンポーネント
 * 統一された背景スタイルを提供
 * 
 * @param children - 子要素
 * @param className - 追加のCSSクラス
 */
export function SectionBackground({
  children,
  className = ""
}: SectionBackgroundProps) {
  return (
    <section className={`relative overflow-hidden py-24 ${className}`}>
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-50/15 to-transparent" />
      
      {/* 装飾的な要素 */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-teal-200/20 rounded-full blur-md animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-300/15 rounded-full blur-md animate-pulse delay-1000" />

      <div className="relative container mx-auto max-w-[1150px] px-4">
        {children}
      </div>
    </section>
  );
} 