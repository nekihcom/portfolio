import Link from "next/link";

/**
 * パターン5: テキストに下線付きで矢印が横にあるリンク
 * - テキストに常に下線が表示されている
 * - テキストの横に矢印アイコンがある
 * - 下線はテキスト部分のみに適用され、矢印には適用されない
 * - ホバー時に全体のopacityが小さくなる
 * - ホバー時に矢印が右にスライドする
 */
const UnderlinedTextWithArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-gray-900 font-bold transition-opacity duration-200 hover:opacity-70 group text-lg"
    >
      {/* テキスト部分（下線付き） */}
      <span className="relative underline decoration-gray-900 underline-offset-4 mr-2">
        {children}
      </span>
      {/* 矢印部分（下線なし、右にスライド） */}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
};

export default UnderlinedTextWithArrowLink;
