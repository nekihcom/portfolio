import Link from "next/link";

/**
 * パターン2: アウトライン付きボタン
 * - 背景色なし、枠線のみ
 * - ホバー時に背景色が追加される
 * - より控えめな印象で、セカンダリアクションに適している
 */
const OutlineButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-md transition-all duration-200 hover:bg-gray-900 hover:text-white active:bg-gray-800"
    >
      {children}
    </Link>
  );
};

export default OutlineButton;

