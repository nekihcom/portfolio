interface TitleProps {
  titleEn: string;
  titleJa?: string;
}

/**
 * セクションヘッダーコンポーネント
 * 各セクションのタイトルと説明を表示
 * 
 * @param titleEn - 英語タイトル
 * @param titleJa - 日本語タイトル
 */
export function Title({
  titleEn,
  titleJa = "",
}: TitleProps) {
  return (
    <>
      {/* <div className={`relative`}>
        <h1 className="text-8xl font-bold text-gray-200">
          {titleEn}
        </h1>
        { titleJa && (
          <h2 className="text-4xl absolute top-9/12 transform -translate-y-1/2 font-bold text-gray-900 whitespace-nowrap">
            {titleJa}
          </h2>
        )}
      </div> */}
      <h1 className="text-8xl font-bold">
        {titleEn}
      </h1>
  </>
  );
} 