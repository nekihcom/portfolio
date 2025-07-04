import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export function SkillListSection() {
  return (
    <SectionBackground className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation>
          <SectionHeader
            title="スキル"
            leftEmoji="🛠️"
            className="text-center mb-12"
          />
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-center">
          {aboutData.skillList.map((skill, idx) => (
            <div key={idx} className="w-full max-w-xl">
              <AnimatedSection delay={0.1 * idx}>
                <div className="bg-white rounded-2xl shadow p-6 flex justify-between">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 w-2/5">
                    {skill.category}
                  </h3>
                  <ul className="text-gray-700 text-base md:text-lg leading-relaxed space-y-1 w-3/5">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
} 