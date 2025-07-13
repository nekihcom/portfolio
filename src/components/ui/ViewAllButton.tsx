import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ViewAllButtonProps {
  href: string;
  text: string;
  emoji?: string;
  className?: string;
}

/**
 * 「すべて見る」ボタンコンポーネント
 * 各セクションの詳細ページへのリンクボタン
 * 
 * @param href - リンク先URL
 * @param text - ボタンテキスト
 * @param emoji - 絵文字アイコン
 * @param className - 追加のCSSクラス
 */
export function ViewAllButton({
  href,
  text,
  emoji = "👀",
  className = ""
}: ViewAllButtonProps) {
  return (
    <div className={`flex justify-center mb-12 ${className}`}>
      <Link href={href}>
        <Button 
          variant="outline" 
          className="group bg-white/90 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">{emoji}</span>
            <span>{text}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Button>
      </Link>
    </div>
  );
} 