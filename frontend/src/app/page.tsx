'use client'

import { fetchHomeData } from "@/lib/fetchHomeData";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { socialLinks } from "@/data/SocialLinkData";

export default async function Home() {
  const { works, posts } = await fetchHomeData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection socialLinks={socialLinks} />
      <SkillsSection />
      <WorksSection works={works} />
      <BlogSection posts={posts} />
      <ContactSection />
    </main>
  );
}
