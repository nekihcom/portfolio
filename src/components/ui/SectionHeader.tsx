interface SectionHeaderProps {
  title: string;
  description?: string;
  leftEmoji?: string;
  rightEmoji?: string;
  className?: string;
}

/**
 * セクションヘッダーコンポーネント
 * 各セクションのタイトルと説明を表示
 * 
 * @param title - セクションタイトル
 * @param description - 説明文
 * @param leftEmoji - 左側の絵文字
 * @param rightEmoji - 右側の絵文字
 * @param className - 追加のCSSクラス
 */
export function SectionHeader({
  title,
  description,
  leftEmoji = "✨",
  rightEmoji = "✨",
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-4xl">{leftEmoji}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title}
        </h2>
        <span className="text-4xl">{rightEmoji}</span>
      </div>
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
} 