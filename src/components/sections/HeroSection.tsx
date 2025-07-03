import { heroData } from "@/data/HeroData";
import { SocialLink } from "@/components/layout/SocialLinks";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ProfileImage } from "@/components/features/ProfileImage";
import { SkillTags } from "@/components/features/SkillTags";
import { SocialLink as SocialLinkComponent } from "@/components/features/SocialLink";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface HeroSectionProps {
  className?: string;
  socialLinks: SocialLink[];
}

/**
 * ヒーローセクションコンポーネント
 * サイトのメインとなる自己紹介エリアを表示
 * 
 * @param className - 追加のCSSクラス
 * @param socialLinks - SNSリンク配列
 */
export function HeroSection({
  className = "",
  socialLinks
}: HeroSectionProps) {
  const skills = [
    { label: "フロントエンド", emoji: "🎯" },
    { label: "パフォーマンス", emoji: "⚡" },
    { label: "UI/UX", emoji: "🎨" }
  ];

  return (
    <SectionBackground className={className}>
      <div className="max-w-5xl mx-auto">
        {/* 上部 2カラム */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16">
          {/* 左カラム：画像・名前・職業 */}
          <AnimatedSection delay={0.2} className="flex flex-col items-center w-full lg:w-1/2 text-center">
            <ProfileImage 
              src={heroData.profileImage} 
              alt="プロフィール画像" 
            />
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {heroData.name}
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl">🚀</span>
                <h2 className="text-xl font-semibold text-gray-700">
                  {heroData.jobTitle}
                </h2>
                <span className="text-xl">💻</span>
              </div>
              
              <SkillTags skills={skills} />
            </div>
          </AnimatedSection>

          {/* 右カラム：SNSリンク（カード形式） */}
          <AnimatedSection delay={0.4} className="flex-1 w-full flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLinkComponent
                    key={link.name}
                    link={link}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 下部 1カラム：説明文・趣味 */}
        <AnimatedSection delay={0.6} className="text-center max-w-3xl mx-auto">
          <div className="p-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {heroData.description}
            </p>
            {heroData.hobbies && (
              <>
                <div className="flex items-center justify-center gap-4 text-lg text-gray-600 mb-6">
                  <div>{heroData.hobbies}</div>
                </div>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow transition-colors duration-200 text-lg"
                  aria-label="自己紹介ページへ"
                >
                  <span>もっと詳しく</span>
                  <span role="img" aria-label="right arrow">👉</span>
                </a>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </SectionBackground>
  );
} 