import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ProfileImage } from "@/components/features/ProfileImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { socialLinks } from "@/data/SocialLinkData";
import { SocialLink as SocialLinkComponent } from "@/components/features/SocialLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface AboutSectionProps {
  className?: string;
}

/**
 * 自己紹介セクションコンポーネント
 * プロフィール画像、基本情報を表示
 * 
 * @param className - 追加のCSSクラス
 */
export function AboutSection({
  className = ""
}: AboutSectionProps) {
  return (
    <SectionBackground className={className}>
      <div className="max-w-6xl mx-auto px-4 pt- pb-4">
        {/* トップページに戻るボタン */}
        <ScrollAnimation animationType="slide-left" delay={0.1}>
          <div className="mb-8">
            <Link href="/">
              <Button 
                variant="outline" 
                className="mb-4 group bg-white/90 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>トップページに戻る</span>
                </span>
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        <div className="w-4/5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* 左カラム：プロフィール画像・基本情報 */}
            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <ProfileImage 
                  src={aboutData.profile.profileImage || "/image.webp"} 
                  alt="プロフィール画像" 
                  className="mb-8"
                />
              
                <div className="space-y-4 mb-12">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {aboutData.profile.name}
                  </h1>

                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <span className="text-xl">🚀</span>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {aboutData.profile.jobTitle}
                    </h2>
                    <span className="text-xl">💻</span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-4">
                    <span>📍</span>
                    <span>{aboutData.profile.location}</span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-6">
                    <span>📧</span>
                    <a 
                      href={`mailto:${aboutData.profile.email}`}
                      className="hover:text-teal-600 transition-colors"
                    >
                      {aboutData.profile.email}
                    </a>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {aboutData.profile.description}
                </p>
              </div>
            </AnimatedSection>

            {/* 右カラム：自己紹介文 */}
            <AnimatedSection delay={0.4} className="lg:col-span-1">
              <div>
                {/* SNSリンクカード */}
                <AnimatedSection delay={0.4} className="flex-1 w-full flex flex-col items-center lg:items-start mb-16">
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

                {/* 目標・価値観 */}
                <div className="mb-12"> 
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    目標・価値観
                  </h3>
                  <div className="space-y-3">
                    {aboutData.goals.map((goal) => (
                      <div key={goal.title} className="flex items-start gap-3">
                        <span className="text-xl">{goal.emoji}</span>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{goal.title}</h4>
                          <p className="text-sm text-gray-600">{goal.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 趣味・興味 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    趣味
                  </h3>
                  <div className="space-y-3">
                    {aboutData.hobbies}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
} 