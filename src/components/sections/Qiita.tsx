import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink"
import { WorkCard } from "@/components/ui/WorkCard"
import { Work } from "@/type/type"

export default function Qiita() {
  const qiita: Work[] = [
    {
      id: "1",
      title: "Next.jsでブログを作る",
      description: "Next.jsでブログを作る方法を解説します。",
      thumbnail: {
        url: "https://placehold.jp/300x200.png",
        height: 200,
        width: 300,
      },
      keywords: "Next.js,React,TypeScript",
      url: "https://qiita.com/nekih/items/1234567890",
      path: "nextjs-blog",
      body: "Next.jsでブログを作る方法を解説します。",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "TypeScriptで型安全なコードを書く",
      description: "TypeScriptで型安全なコードを書く方法を解説します。",
      thumbnail: {
        url: "https://placehold.jp/300x200.png",
        height: 200,
        width: 300,
      },
      keywords: "TypeScript,JavaScript",
      url: "https://qiita.com/nekih/items/0987654321",
      path: "typescript-type-safe",
      body: "TypeScriptで型安全なコードを書く方法を解説します。",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Reactでコンポーネントを作る",
      description: "Reactでコンポーネントを作る方法を解説します。",
      thumbnail: {
        url: "https://placehold.jp/300x200.png",
        height: 200,
        width: 300,
      },
      keywords: "React,JavaScript",
      url: "https://qiita.com/nekih/items/1357924680",
      path: "react-components",
      body: "Reactでコンポーネントを作る方法を解説します。",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    },
    {
      id: "4",
      title: "Tailwind CSSでスタイリングする",
      description: "Tailwind CSSでスタイリングする方法を解説します。",
      thumbnail: {
        url: "https://placehold.jp/300x200.png",
        height: 200,
        width: 300,
      },
      keywords: "Tailwind CSS,CSS",
      url: "https://qiita.com/nekih/items/2468135790",
      path: "tailwind-css",
      body: "Tailwind CSSでスタイリングする方法を解説します。",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    },
  ]

  // 最初の3件だけを表示
  const displayQiita = qiita.slice(0, 3);
  // 4件以上あるかどうかを判定
  const hasMoreQiita = qiita.length > 3;

  return (
    <SectionContainer id="qiita" className="mt-24 mb-36">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {displayQiita.map((qiita, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]"
          >
            <WorkCard {...qiita} />
          </div>
        ))}
      </div>
      {hasMoreQiita && (
        <div className="mt-8">
          <ExploreLink
            href="https://qiita.com/nekih"
            jaText="Qiitaをもっと見る"
          />
        </div>
      )}
    </SectionContainer>
  )
} 