import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { getWorks } from "@/lib/microcms"

type WorkParams = Promise<{
  path: string;
}>;

type PageProps = {
  params: WorkParams;
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page(props: PageProps) {
  return <WorkContent {...props} />;
}

async function WorkContent({ params }: { params: WorkParams }) {
  // paramsをPromiseとして扱い、awaitで解決する
  const resolvedParams = await params;
  const path = resolvedParams.path;
  
  const works = await getWorks();
  const work = works.find((w) => w.path === path);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionContainer id="work-detail" className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-12" : ""}`}>
            <Link 
              href="/#works"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              作品一覧に戻る
            </Link>
          </div>

          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={work.thumbnail.url}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{work.title}</h1>
              <p className="text-gray-600 mb-6">{work.description}</p>

              {work.keywords && work.keywords.split(",").length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">使用技術</h2>
                  <div className="flex flex-wrap gap-2">
                    {work.keywords.split(",").map((keyword, index) => (
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

              <div
                className="prose prose-teal max-w-none
                  [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:border-b-4 [&>h1]:border-teal-500 [&>h1]:inline-block [&>h1]:pb-1
                  [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-6 [&>h2]:mb-3
                  [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-4 [&>h3]:mb-2
                  [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:my-4
                  [&>a]:text-teal-600 [&>a]:no-underline hover:[&>a]:underline
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-4
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-4
                  [&>li]:text-gray-600 [&>li]:my-1
                  [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-6
                  [&>blockquote]:border-l-4 [&>blockquote]:border-teal-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                  [&>code]:text-teal-600 [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded
                  [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: work.body }}
              />

              {work.url && (
                <div className="mt-12 flex justify-center">
                  <Link
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
                  >
                    プロジェクトを見る
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-12" : ""}`}>
            <Link 
              href="/#works"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              作品一覧に戻る
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
} 