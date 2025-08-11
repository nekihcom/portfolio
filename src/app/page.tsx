import { fetchHomeData } from "@/lib/fetchHomeData";
import { HeroSection } from "@/components/sections/HeroSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Wrapper } from "@/components/common/Wrapper";

export default async function Home() {
  const { 
    // works, 
    posts
  } = await fetchHomeData();

  return (
    <main className="">
      <Wrapper>
        <HeroSection />
        <BlogSection posts={posts} maxCount={6} />
      </Wrapper>
    </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1時間（3600秒）ごとに再生成
 */
export const revalidate = 3600;
