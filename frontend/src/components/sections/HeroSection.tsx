import { Button } from "@/components/ui/button";
import { SocialLinks, SocialLink } from "@/components/layout/SocialLinks";

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
  profileImage = "/api/placeholder/150/150",
  title = "フロントエンドエンジニア",
  description = "Next.js、React、TypeScriptを中心としたモダンなWeb開発を専門としています。\nユーザー体験を重視した、保守性の高いアプリケーションの開発が得意です。",
  primaryButtonText = "作品を見る",
  secondaryButtonText = "ブログを読む",
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
            src={profileImage} 
            alt="プロフィール画像" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          {title}
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
          {description}
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="px-8"
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
          </Button>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </section>
  );
} 