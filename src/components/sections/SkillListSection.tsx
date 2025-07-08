import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export function SkillListSection() {

  return (
    <SectionBackground className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <SectionHeader
            title="スキル"
            leftEmoji="🛠️"
            className="text-center mb-12"
          />
        </ScrollAnimation>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-items-center" style={{ gridTemplateRows: '1fr' }}>
            {aboutData.skillList.map((skill, idx) => (
              <div key={idx} className="w-full max-w-xl h-full">
                <AnimatedSection delay={0.1 * idx} className={`${idx === 4 ? 'h-full' : ''}`}>
                  <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      {skill.category}
                    </h4>
                    <ul className="text-gray-700 text-base md:text-lg leading-relaxed space-y-1 flex-grow">
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
      </div>
    </SectionBackground>
  );
} 