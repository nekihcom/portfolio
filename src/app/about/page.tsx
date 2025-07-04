import { AboutSection } from "@/components/sections/AboutSection";
import { SkillListSection } from "@/components/sections/SkillListSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "自己紹介",
  description: "エンジニア Mochiken の自己紹介ページ。経歴、スキル、趣味などを詳しく紹介しています。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <AboutSection />
      <SkillListSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1日（86400秒）ごとに再生成
 */
export const revalidate = 86400; 