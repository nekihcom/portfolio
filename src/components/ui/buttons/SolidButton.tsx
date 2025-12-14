import Link from "next/link";

/**
 * パターン1: 基本的なソリッドボタン
 * - 背景色とテキスト色のコントラストが明確
 * - ホバー時に背景色が少し濃くなる
 * - 最もシンプルで一般的なボタンスタイル
 */
const SolidButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-md transition-colors duration-200 hover:bg-gray-800 active:bg-gray-700"
    >
      {children}
    </Link>
  );
};

export default SolidButton;

