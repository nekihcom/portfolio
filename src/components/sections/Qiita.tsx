import { getMyAllQiitaPosts } from "@/lib/hook/useArticle"
import { SectionTitle } from "@/components/ui/SectionTitle"
import QiitaArticleList from "@/components/ui/QiitaArticleList"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { BgLink } from "@/components/ui/BgLink"

export default async function Qiita() {
  const { qiitaItems } = await getMyAllQiitaPosts()

  return (
    <SectionContainer id="qiita" className="bg-gray-600a">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <QiitaArticleList allArticles={qiitaItems} />
      </div>
      <div className="text-center mt-8">
        <BgLink
          href="https://qiita.com/nekihcom"
          text="Qiitaを見てみる"
          style="bg-green-600 text-white hover:bg-green-700"
        />
      </div>
    </SectionContainer>
  )
} 