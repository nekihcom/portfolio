import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfileImage } from "@/components/features/ProfileImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

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
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-4">
        <ScrollAnimation>
          <SectionHeader
            title="自己紹介"
            description="About Me"
            leftEmoji="👋"
            className="text-center mb-16"
          />
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
              
                <div className="space-y-4">
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
              </div>
            </AnimatedSection>

            {/* 右カラム：自己紹介文 */}
            <AnimatedSection delay={0.4} className="lg:col-span-1">
              <div>
                <p className="text-gray-700 leading-relaxed mb-16">
                  {aboutData.profile.description}
                </p>

                {/* 趣味・興味 */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    趣味
                  </h3>
                  <div className="space-y-3">
                    {aboutData.hobbies.map((hobby) => (
                      <div key={hobby.name} className="flex items-start gap-3">
                        <span className="text-xl">{hobby.emoji}</span>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{hobby.name}</h4>
                          <p className="text-sm text-gray-600">{hobby.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 目標・価値観 */}
                <div> 
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
} 