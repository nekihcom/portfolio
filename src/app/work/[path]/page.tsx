import { notFound } from "next/navigation"
import { worksData } from "@/data/works"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getMarkdownContent } from "@/lib/markdown"

export default function WorkDetail({ params }: { params: { path: string } }) {
  const work = worksData.find((work) => work.path === params.path)

  if (!work || !work.detailFlg) {
    notFound()
  }

  const { content, data } = getMarkdownContent(work.path)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 ${process.env.NODE_ENV === "development" ? "mt-24" : ""}`}>
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
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{work.title}</h1>
              <p className="text-gray-600 mb-6">{work.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">使用技術</h2>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="mt-24 mb-4 text-3xl font-bold text-gray-900 border-b-4 border-teal-500 inline-block pb-1" {...props} />,
                    h2: ({node, ...props}) => <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900" {...props} />,
                    h3: ({node, ...props}) => <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4 text-gray-600" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4 text-gray-600" {...props} />,
                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                    p: ({node, ...props}) => <p className="mb-3 text-gray-600" {...props} />,
                    strong: ({node, ...props}) => <strong className="text-gray-900" {...props} />,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>

              {work.url && (
                <div className="mt-24 flex justify-center">
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
        </div>
      </main>
    </div>
  )
} 