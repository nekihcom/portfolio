interface EmptyStateProps {
  emoji: string;
  title: string;
  description: string;
  subText?: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
}

/**
 * 空の状態表示コンポーネント
 * データがない場合の表示用
 * 
 * @param emoji - メイン絵文字
 * @param title - タイトル
 * @param description - 説明文
 * @param subText - サブテキスト
 * @param leftIcon - 左側のアイコン
 * @param rightIcon - 右側のアイコン
 * @param className - 追加のCSSクラス
 */
export function EmptyState({
  emoji,
  title,
  description,
  subText,
  leftIcon = "⏳",
  rightIcon = "🎯",
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="bg-white/80 rounded-2xl p-12 shadow-lg border border-gray-100 max-w-md mx-auto">
        <div className="text-8xl mb-6 animate-bounce">{emoji}</div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        {subText && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>{leftIcon}</span>
            <span>{subText}</span>
            <span>{rightIcon}</span>
          </div>
        )}
      </div>
    </div>
  );
} 