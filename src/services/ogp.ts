import * as cheerio from "cheerio";

/**
 * URLからOGP画像を取得
 * @param url 取得対象のURL
 * @returns OGP画像のURL、取得できない場合はnull
 */
export async function getOgpImageUrl(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // og:imageを取得
    const ogImage = $('meta[property="og:image"]').attr("content");

    return ogImage || null;
  } catch (error) {
    console.error(`Failed to fetch OGP image from ${url}:`, error);
    return null;
  }
}

