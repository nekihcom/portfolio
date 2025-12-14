import Link from "next/link";

/**
 * パターン1: 基本的な下線付きテキストリンク
 * - デフォルトで下線なし、ホバー時に下線が表示される
 * - 下線が左から右に拡大するアニメーション
 * - シンプルで一般的なテキストリンクスタイル
 */
const UnderlineTextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative inline-block text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default UnderlineTextLink;

