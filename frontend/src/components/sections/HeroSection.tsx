import { Button } from "@/components/ui/button";
import { SocialLinks, SocialLink } from "@/components/layout/SocialLinks";
import { heroData } from "@/data/HeroData";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  className?: string;
  socialLinks: SocialLink[];
}

/**
 * ヒーローセクションコンポーネント
 * サイトのメインとなる自己紹介エリアを表示
 * 
 * @param onPrimaryButtonClick - プライマリボタンクリック時のコールバック
 * @param onSecondaryButtonClick - セカンダリボタンクリック時のコールバック
 * @param className - 追加のCSSクラス
 * @param socialLinks - SNSリンク配列
 */
export function HeroSection({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  className = "",
  socialLinks
}: HeroSectionProps) {
  return (
    <section className={`container mx-auto max-w-[1150px] px-4 py-20 ${className}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* 上部 2カラム */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* 左カラム：画像・名前・職業 */}
          <div className="flex flex-col items-center w-full md:w-1/2 text-center">
            <img 
              src={heroData.profileImage} 
              alt="プロフィール画像" 
              className="w-48 h-48 rounded-full mb-6 border-4 border-white shadow-lg mx-auto"
            />
            <h1 className="text-4xl font-bold text-slate-900 mb-2 mx-auto">
              {heroData.name}
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-2 mx-auto">
              {heroData.jobTitle}
            </h2>
          </div>
          {/* 右カラム：SNSリンク（カード形式） */}
          <div className="flex-1 w-full flex flex-col items-center md:items-end">
            <div className="w-full max-w-xs flex flex-col gap-4">
              {socialLinks.map((link) => (
                <div key={link.name} className="bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-md transition">
                  <span className="text-xl">{link.icon}</span>
                  <div className="flex flex-col">
                    {link.username && (
                      <span className="font-bold text-slate-700">{link.username}</span>
                    )}
                    <span className="text-xs text-slate-500">{link.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 下部 1カラム：説明文・趣味 */}
        <div className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          <p className="mb-2">{heroData.description}</p>
          {heroData.hobbies && <div>{heroData.hobbies}</div>}
        </div>
      </div>
    </section>
  );
} 