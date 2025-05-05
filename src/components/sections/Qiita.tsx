import { SectionTitle } from "@/components/ui/SectionTitle"
import QiitaArticleList from "@/components/ui/QiitaArticleList"
import { getMyAllQiitaPosts } from "@/lib/hook/useArticle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink"

export default async function Qiita() {
  const { qiitaItems } = await getMyAllQiitaPosts()

  return (
    <SectionContainer id="qiita" className="my-24">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <QiitaArticleList allArticles={qiitaItems} />
      </div>
      <div className="text-center mt-8">
        <ExploreLink
          href="https://qiita.com/nekihcom"
          jaText="Qiitaをもっと見る"
        />
      </div>
    </SectionContainer>
  )
} 