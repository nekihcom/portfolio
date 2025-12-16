import Parser from "rss-parser";
import type { IArticle } from "@/types/type";

// media:thumbnailを取得するためにカスタムフィールドを設定
const parser = new Parser({
  customFields: {
    item: ['media:thumbnail']
  }
});

/**
 * note.comからRSSフィードを取得してIArticle形式に変換
 */
export async function fetchNoteArticles(): Promise<IArticle[]> {
  try {
    const userName = process.env.USERNAME;
    
    if (!userName) {
      console.warn("USERNAME is not set");
      return [];
    }

    const feed = await parser.parseURL(`https://note.com/${userName}/rss`);
    
    if (!feed.items || feed.items.length === 0) {
      return [];
    }

    const articles: IArticle[] = feed.items.map((item: any) => {
      // media:thumbnailから画像URLを取得
      let ogpImageUrl: string | undefined;
      
      if (item['media:thumbnail']) {
        // media:thumbnailがオブジェクトの場合（url属性を持つ）
        if (typeof item['media:thumbnail'] === 'object' && item['media:thumbnail'].url) {
          ogpImageUrl = item['media:thumbnail'].url;
        }
        // media:thumbnailが配列の場合
        else if (Array.isArray(item['media:thumbnail']) && item['media:thumbnail'].length > 0) {
          const firstThumbnail = item['media:thumbnail'][0];
          ogpImageUrl = typeof firstThumbnail === 'object' && firstThumbnail.url 
            ? firstThumbnail.url 
            : firstThumbnail;
        }
        // media:thumbnailが文字列の場合
        else if (typeof item['media:thumbnail'] === 'string') {
          ogpImageUrl = item['media:thumbnail'];
        }
      }
      
      // media:thumbnailが取得できない場合はenclosureをフォールバック
      if (!ogpImageUrl) {
        ogpImageUrl = item.enclosure?.url;
      }

      const article: IArticle = {
        id: item.guid ?? "",
        title: item.title ?? "",
        created_dt: item.pubDate ?? "",
        thumbnail: ogpImageUrl ?? "",
        url: item.link ?? "",
        source: "note"
      };

      return article;
    });

    return articles;
  } catch (error) {
    console.error("Failed to fetch note articles:", error);
    return [];
  }
}
