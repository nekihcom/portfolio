import { getPaginatedBlogs } from "@/lib/microcms";
import BlogListPage from "@/components/ui/BlogListPage";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "ブログ一覧 | Portfolio",
  description: "ブログ記事の一覧ページです。",
};

export default async function BlogPage() {
  // 初期表示用に最初の9件を取得
  const initialBlogs = await getPaginatedBlogs(0, 9);
  
  return (
    <SectionContainer id="blog-detail" className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-12" : ""}`}>
          <SectionTitle>Blog</SectionTitle>
        </div>
        <BlogListPage initialBlogs={initialBlogs} />
      </div>
    </SectionContainer>
  );
} 