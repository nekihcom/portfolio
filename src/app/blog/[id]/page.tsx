import { getBlog } from '@/lib/microcms'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SectionContainer } from "@/components/ui/SectionContainer"

type BlogParams = Promise<{
  id: string;
}>;

export default async function Page({ params }: { params: BlogParams }) {
  // paramsをPromiseとして扱い、awaitで解決する
  const resolvedParams = await params;
  
  // ブログのデータを取得
  const blog = await getBlog(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  // 日付をフォーマット（YYYY-MM-DD）
  const postDate = new Date(blog.post_dt).toLocaleDateString('sv-SE')
  // キーワードを配列に分割
  const keywords = blog.keywords ? blog.keywords.split(',').map(keyword => keyword.trim()) : []

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionContainer id="blog-detail" className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-12" : ""}`}>
            <Link 
              href="/blog"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>

          <div className="rounded-lg overflow-hidden">
            {/* サムネイル画像 */}
            {blog.thumbnail && (
              <div className="aspect-video relative">
                <Image
                  src={blog.thumbnail.url}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
                {blog.category && (
                  <span className="absolute bottom-4 right-4 bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm shadow-md">
                    {blog.category}
                  </span>
                )}
              </div>
            )}

            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
              <div className="text-gray-600 mb-6">
                <time dateTime={blog.post_dt}>{postDate}</time>
              </div>

              {/* キーワード */}
              {keywords.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">キーワード</h2>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 本文 */}
              <div
                className="prose prose-teal max-w-none
                  [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:border-b-4 [&>h1]:border-teal-500 [&>h1]:inline-block [&>h1]:pb-1
                  [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:my-8
                  [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:my-8
                  [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:my-8
                  [&>p>a]:text-teal-600 [&>p>a]:underline hover:[&>p>a]:text-teal-700
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-8
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-8
                  [&>li]:text-gray-600 [&>li]:my-2
                  [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-8
                  [&>blockquote]:border-l-4 [&>blockquote]:border-teal-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                  [&>code]:text-teal-600 [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:my-8
                  [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-8
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-8
                  [&>table>thead]:bg-gray-100
                  [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-300 [&>table>thead>tr>th]:px-4 [&>table>thead>tr>th]:py-2 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:text-gray-900 [&>table>thead>tr>th]:font-semibold
                  [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-300 [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:py-2 [&>table>tbody>tr>td]:text-gray-600
                  [&>table>tbody>tr:nth-child(even)]:bg-gray-50
                  [&>table>tbody>tr>th]:border [&>table>tbody>tr>th]:border-gray-300 [&>table>tbody>tr>th]:px-4 [&>table>tbody>tr>th]:py-2 [&>table>tbody>tr>th]:text-left [&>table>tbody>tr>th]:text-gray-900 [&>table>tbody>tr>th]:font-semibold [&>table>tbody>tr>th]:bg-gray-200
                  [&>table>tbody>tr>th>p]:text-center"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              />
            </div>
          </div>

          <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-12" : ""}`}>
            <Link 
              href="/blog"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>

        </div>
      </SectionContainer>
    </div>
  )
} 