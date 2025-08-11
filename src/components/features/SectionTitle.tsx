import { Title } from "@/components/common/Title";

interface SectionTitleProps {
  titleEn: string;
  titleJa?: string;
  description?: string;
  className?: string;
}

/**
 * セクションヘッダーコンポーネント
 * 各セクションのタイトルと説明を表示
 * 
 * @param titleEn - 英語タイトル
 * @param titleJa - 日本語タイトル
 * @param description - 説明文
 */
export function SectionTitle({
  titleEn,
  titleJa = "",
  description = "",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={className}>
      <Title titleEn={titleEn} titleJa={titleJa} />
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
} 