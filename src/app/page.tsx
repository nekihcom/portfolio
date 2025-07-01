import { fetchHomeData } from "@/lib/fetchHomeData";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { socialLinks } from "@/data/SocialLinkData";

export default async function Home() {
  const { works, posts } = await fetchHomeData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection socialLinks={socialLinks} />
      <WorksSection title="最近の作品" works={works} />
      <BlogSection posts={posts} maxCount={6} />
      <ContactSection />
      </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1時間（3600秒）ごとに再生成
 */
export const revalidate = 3600;
