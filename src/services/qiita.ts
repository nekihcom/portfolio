import type { IArticle } from "@/types/type";
import * as cheerio from "cheerio";
import ky from "ky";

/**
 * OGP画像を取得する
 */
async function getOgpImageUrl(url: string): Promise<string | undefined> {
  try {
    const res = await ky.get(url);
    const text = await res.text();
    const $ = cheerio.load(text);
    const ogImage = $('meta[property="og:image"]').attr("content");
    
    return ogImage || undefined;
  } catch (error) {
    console.error(`Failed to get OGP image from ${url}:`, error);
    return undefined;
  }
}

/**
 * Qiita APIから記事を取得してIArticle形式に変換
 */
export async function fetchQiitaArticles(): Promise<IArticle[]> {
  try {
    const userName = process.env.USERNAME;
    
    if (!userName) {
      console.warn("USERNAME is not set");
      return [];
    }

    const response = await fetch(
      `https://qiita.com/api/v2/users/${userName}/items`,
      {
        next: { revalidate: 3600 }, // ISR: 1時間ごとに再生成
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Qiita articles: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return [];
    }

    const articles: IArticle[] = await Promise.all(data.map(async (item: any) => {
      const ogpImageUrl = await getOgpImageUrl(item.url);
      return {
        id: item.id ?? "",
        title: item.title ?? "",
        created_dt: item.created_at ?? "",
        thumbnail: ogpImageUrl ?? "",
        url: item.url ?? "",
        source: "Qiita"
      };
    }));


    return articles;
  } catch (error) {
    console.error("Failed to fetch Qiita articles:", error);
    return [];
  }
}