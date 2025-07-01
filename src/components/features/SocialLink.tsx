import { SocialLink as SocialLinkType } from "@/components/layout/SocialLinks";

interface SocialLinkProps {
  link: SocialLinkType;
  index?: number;
  className?: string;
}

/**
 * SNSリンクコンポーネント
 * 個別のSNSリンクをカード形式で表示
 * 
 * @param link - SNSリンク情報
 * @param index - アニメーション遅延用のインデックス
 * @param className - 追加のCSSクラス
 */
export function SocialLink({
  link,
  index = 0,
  className = ""
}: SocialLinkProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-white/90 rounded-xl shadow-lg p-4 flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:bg-teal-100/50 ${className}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:text-teal-700">
        {link.icon}
      </div>
      <div className="flex flex-col flex-1">
        {link.username && (
          <span className="font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
            {link.username}
          </span>
        )}
        <span className="text-sm text-gray-500 group-hover:text-teal-700">{link.name}</span>
      </div>
      <div className="text-gray-400 group-hover:text-teal-500 transition-colors">
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}
