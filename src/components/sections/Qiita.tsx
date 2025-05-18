import Image from "next/image";
import { JSDOM } from "jsdom";
import ky from "ky";

import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ParsedQiitaItem } from "@/type/type";
import { getQiita } from "@/lib/microcms"

const getOgpImageUrls = async (urls: string[]): Promise<string[]> => {
  const jsdom = new JSDOM();
  const ogpUrls: string[] = [];

  for (const url of urls) {
    try {
      const res = await ky.get(url);
      const text = await res.text();
      const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
      const headEls = el.head.children;
      
      Array.from(headEls).forEach((v) => {
        const prop = v.getAttribute("property");
        if (prop === "og:image") {
          ogpUrls.push(v.getAttribute("content") ?? "");
        }
      });
    } catch (error) {
      console.error(`Failed to fetch OGP for ${url}:`, error);
      ogpUrls.push("");
    }
  }

  return ogpUrls;
};

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

  return (
    <SectionContainer id="qiita" className="my-24">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {parsedQiitaItems.slice(0, 3).map((qiita, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{qiita.title}</h3>
              {qiita.ogpImageUrl && (
                <Image 
                  src={qiita.ogpImageUrl} 
                  alt={qiita.title} 
                  width={1200} 
                  height={630}
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
} 