import { Button } from "@/components/ui/button";
import { SocialLinks, SocialLink } from "@/components/layout/SocialLinks";
import { heroData } from "@/data/HeroData";

interface HeroSectionProps {
  profileImage?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  className?: string;
  socialLinks: SocialLink[];
}

/**
 * ヒーローセクションコンポーネント
 * サイトのメインとなる自己紹介エリアを表示
 * 
 * @param profileImage - プロフィール画像のURL
 * @param title - メインタイトル
 * @param description - 説明文
 * @param primaryButtonText - プライマリボタンのテキスト
 * @param secondaryButtonText - セカンダリボタンのテキスト
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
        <div className="mb-8">
          <img 
            src={heroData.profileImage} 
            alt="プロフィール画像" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          {heroData.title}
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
          {heroData.description}
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="px-8"
            onClick={onPrimaryButtonClick}
          >
            {heroData.primaryButtonText}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8"
            onClick={onSecondaryButtonClick}
          >
            {heroData.secondaryButtonText}
          </Button>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </section>
  );
} 