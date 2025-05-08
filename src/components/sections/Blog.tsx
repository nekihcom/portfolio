import { SectionTitle } from "@/components/ui/SectionTitle"
import BlogList from "@/components/ui/BlogList"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink"
import { getBlogs } from "@/lib/microcms"
import type { Blog, ParsedBlogItem } from "@/type/type"

export default async function Blog() {
  const blogsData = await getBlogs();
  
  // Blog型からParsedBlogItem型に変換
  const parsedBlogs: ParsedBlogItem[] = blogsData.map(blog => ({
    id: blog.id,
    title: blog.title,
    content: blog.body,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
    ogpImageUrl: blog.thumbnail?.url || 'https://placehold.jp/300x200.png',
    link: `/blog/${blog.id}`,
  }));

  // 表示するブログ記事を最大3件に制限
  const displayBlogs = parsedBlogs.slice(0, 3);
  // 4件以上あるかどうかを判定
  const hasMoreBlogs = parsedBlogs.length > 3;

  return (
    <SectionContainer id="blog" className="mt-24 mb-36">
      <SectionTitle>Blog</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <BlogList allArticles={displayBlogs} />
      </div>
      {hasMoreBlogs && (
        <div className="mt-8">
          <ExploreLink
            href="/blog"
            jaText="ブログをもっと見る"
          />
        </div>
      )}
    </SectionContainer>
  )
} 