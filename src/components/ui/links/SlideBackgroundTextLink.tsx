import Link from "next/link";

/**
 * パターン2: 背景色が左から右に広がるテキストリンク
 * - ホバー時に背景色が左から右にスライドするアニメーション
 * - テキスト色も同時に変化
 * - 視覚的に目立つ、強調したいリンクに適している
 */
const SlideBackgroundTextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative inline-block px-2 py-1 text-gray-900 font-medium overflow-hidden group"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute inset-0 bg-gray-900 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
    </Link>
  );
};

export default SlideBackgroundTextLink;

