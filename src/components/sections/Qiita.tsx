import { JSDOM } from "jsdom";
import ky from "ky";

import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ParsedQiitaItem } from "@/type/type";
import { getQiita } from "@/lib/microcms"
import { ExploreLink } from "../ui/ExploreLink";
import QiitaList from "../ui/QiitaList";

const getOgpImageUrl = async (url: string): Promise<string> => {
  try {
    const res = await ky.get(url);
    const text = await res.text();
    const jsdom = new JSDOM();
    const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
    const headEls = el.head.children;
    
    for (const v of Array.from(headEls)) {
      const prop = v.getAttribute("property");
      if (prop === "og:image") {
        return v.getAttribute("content") ?? "";
      }
    }
    return "";
  } catch (error) {
    console.error(`Failed to fetch OGP for ${url}:`, error);
    return "";
  }
};

const getOgpImageUrls = async (urls: string[]): Promise<string[]> => {
  // 並列でリクエストを実行
  const promises = urls.map(url => getOgpImageUrl(url));
  return Promise.all(promises);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseQiitaItems = (qiitaItems: any[], ogpUrls: string[]): ParsedQiitaItem[] => {
  return qiitaItems.map(({
    coediting,
    comments_count,
    created_at,
    id,
    likes_count,
    page_views_count,
    tags,
    title,
    updated_at,
    url,
    reactions_count,
    private: _private,
  }, i) => ({
    coediting,
    comments_count,
    created_at,
    id,
    likes_count,
    ogpImageUrl: ogpUrls[i],
    page_views_count,
    private: _private,
    reactions_count,
    tags,
    title,
    updated_at,
    url,
  }));
};

export default async function Qiita() {
  const qiitaItems = await getQiita();
  const ogpUrls = await getOgpImageUrls(qiitaItems.map(item => item.url));
  const parsedQiitaItems = parseQiitaItems(qiitaItems, ogpUrls);

  // 表示するブログ記事を最大6件に制限
  const displayQiitaItems = parsedQiitaItems.slice(0, 6);
  // 7件以上あるかどうかを判定
  const hasMoreQiitaItems = parsedQiitaItems.length > 6;
  return (
    <SectionContainer id="qiita" className="my-24">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <QiitaList allQiitaArticles={displayQiitaItems} />
      </div>
      {hasMoreQiitaItems && (
        <div className="mt-8">
          <ExploreLink
            href="https://qiita.com/nekihcom"
            jaText="Qiitaの記事をもっと見る"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      )}
    </SectionContainer>
  )
} 
