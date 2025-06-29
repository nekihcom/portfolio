'use client'

import { fetchHomeData } from "@/lib/fetchHomeData";
import { 
  HeroSection, 
  SkillsSection, 
  WorksSection, 
  BlogSection, 
  ContactSection 
} from "@/components/sections";

export default async function Home() {
  const { works, posts } = await fetchHomeData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      <SkillsSection />
      <WorksSection works={works} />
      <BlogSection posts={posts} />
      <ContactSection />
    </main>
  );
}
