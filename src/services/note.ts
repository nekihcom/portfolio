import Parser from "rss-parser";
import { note as noteConstants } from "@/constants/note";
import type { Article } from "@/types/type";

const parser = new Parser();

/**
 * noteの最新記事を取得（RSSフィードから）
 */
export async function getNoteArticles(limit: number = noteConstants.limit): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(noteConstants.url);
    return feed.items.slice(0, limit).map((item, index) => ({
      id: `${noteConstants.name}-${index + 1}`,
      title: item.title || "",
      url: item.link || "",
      createdAt: item.pubDate || new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch note articles:", error);
    // エラー時は空配列を返す
    return [];
  }
}

