import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

/**
 * 経歴セクションコンポーネント
 * 職歴や学習歴をタイムライン形式で表示
 */
export function ExperienceSection() {
  return (
    <SectionBackground className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollAnimation>
          <SectionHeader
            title="経歴"
            description="Experience & Education"
            leftEmoji="📚"
            className="text-center mb-16"
          />
        </ScrollAnimation>

        <div className="relative">
          {/* タイムラインの中央線 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 to-teal-600"></div>

          <div className="space-y-12">
            {[...aboutData.experience].reverse().map((exp, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <div className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* タイムラインの丸 */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* コンテンツカード */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">💼</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-teal-600 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        {exp.period}
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <span>🏆</span>
                            主な成果
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-teal-500 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
} 