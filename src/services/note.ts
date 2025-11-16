import Parser from "rss-parser";
import { note as noteConstants } from "@/constants/note";
import type { Article } from "@/types/type";

const parser = new Parser({
  customFields: {
    item: [
      ['note:creatorImage', 'creatorImage'],
    ]
  }
})
/**
 * noteの最新記事を取得（RSSフィードから）
 */
export async function getNoteArticles(limit: number = noteConstants.limit): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(noteConstants.url);
    return feed.items.slice(0, limit).map((item) => ({
      id: item.guid ?? "",
      title: item.title ?? "",
      url: (item.link ?? item.guid ?? ""),
      createdAt: item.pubDate ?? new Date().toISOString(),
      thumbnail: item.creatorImage ?? "",
    }));
  } catch (error) {
    // エラー時は空配列を返す
    return [];
  }
}

