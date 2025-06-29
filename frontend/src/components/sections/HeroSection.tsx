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
    <section className={`container mx-auto px-4 py-20 ${className}`}>
      <div className="text-center max-w-4xl mx-auto">
        {/* プロフィール画像 */}
        <div className="mb-8">
          <img 
            src={heroData.profileImage} 
            alt="プロフィール画像" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
        </div>

        {/* 名前 */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          {heroData.name}
        </h1>

        {/* 職種 */}
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">
          {heroData.jobTitle}
        </h2>

        {/* 自己紹介 */}
        <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-2xl mx-auto">
          {heroData.description}
        </p>

        {/* 趣味 */}
        <div className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          {heroData.hobbies}
        </div>

        {/* SNSリンク */}
        <SocialLinks links={socialLinks} />
      </div>
    </section>
  );
} 