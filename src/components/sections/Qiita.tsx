import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import QiitaArticleList from "@/components/ui/QiitaArticleList"
import { getMyAllQiitaPosts } from "@/lib/hook/useArticle"


export default async function Qiita() {

  const qiitaItems = (await getMyAllQiitaPosts()).qiitaItems;

  return (
    <section id="qiita" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>Qiita</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <QiitaArticleList allArticles={qiitaItems} />
        </div>
      </Container>
    </section>
  )
} 