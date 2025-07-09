"use client";

import { useState } from "react";
import { aboutData } from "@/data/AboutData";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * 経歴セクションコンポーネント
 * 職歴や学習歴をタイムライン形式で表示
 */
export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<typeof aboutData.experience[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: typeof aboutData.experience[0]) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

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

          <div className="space-y-8">
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
                    <div 
                      className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1"
                      onClick={() => handleExperienceClick(exp)}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">💼</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-teal-600 font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        {exp.period}
                      </div>

                      {/* クリックヒント */}
                      <div className="mt-4 text-xs text-gray-400 text-center">
                        クリックして詳細を見る
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 詳細モーダル */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {selectedExperience.title}
                      </h3>
                      <p className="text-teal-600 font-medium text-sm">{selectedExperience.company}</p>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
          
              <div className="space-y-6">
                {/* 詳細説明 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📝</span>
                    詳細
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* 主な成果・プロジェクト */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span>🚀</span>
                    主な成果・プロジェクト
                  </h4>
                  <ul className="space-y-3">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700 flex items-start gap-3">
                        <span className="text-teal-500 mt-1 text-lg">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionBackground>
  );
} 