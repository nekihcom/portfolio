import Link from "next/link";

/**
 * パターン3: テキストが右に移動してアイコンが表示されるリンク
 * - ホバー時にテキストが右に移動
 * - 同時に右側に矢印アイコンがフェードイン
 * - 遷移先が明確で、インタラクティブな印象
 */
const IconSlideTextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-gray-900 font-medium transition-all duration-300 hover:text-blue-600 group"
    >
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
      <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
    </Link>
  );
};

export default IconSlideTextLink;

