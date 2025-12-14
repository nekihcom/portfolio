import Link from "next/link";

/**
 * パターン4: アイコン付きボタン
 * - テキストとアイコン（矢印）を組み合わせ
 * - アイコンがホバー時に右に移動するアニメーション
 * - 遷移先が明確で、ユーザーに次のアクションを示す
 */
const IconButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-md transition-all duration-200 hover:bg-gray-200 hover:gap-3 active:bg-gray-300 group"
    >
      <span>{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </Link>
  );
};

export default IconButton;

