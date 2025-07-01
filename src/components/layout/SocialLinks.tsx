import React from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  username?: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

/**
 * ソーシャルメディアリンクを表示するコンポーネント
 * @param links - ソーシャルリンクの配列（必須）
 * @param className - 追加のCSSクラス
 */
export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="text-slate-600 hover:text-slate-900 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
} 