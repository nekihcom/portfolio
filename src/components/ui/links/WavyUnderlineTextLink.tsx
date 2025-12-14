import Link from "next/link";

/**
 * パターン4: 点線アンダーラインがアニメーションするリンク
 * - ホバー時に点線の下線が表示される
 * - 点線が左から右に流れるアニメーション（点が移動する視覚効果）
 * - 装飾的で、クリエイティブな印象を与える
 */
const WavyUnderlineTextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative inline-block text-gray-900 font-medium transition-colors duration-200 hover:text-blue-600 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 border-b-2 border-dotted border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      {/* 点線のアニメーション効果（点が移動するように見せる） */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </Link>
  );
};

export default WavyUnderlineTextLink;

