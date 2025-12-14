import Link from "next/link";

/**
 * パターン3: グラデーションボタン
 * - 背景にグラデーションを適用
 * - ホバー時にグラデーションの方向や強度が変わる
 * - 視覚的に目立つ、プライマリアクションに適している
 */
const GradientButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-95"
    >
      {children}
    </Link>
  );
};

export default GradientButton;

