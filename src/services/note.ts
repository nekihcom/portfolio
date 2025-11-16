import Parser from "rss-parser";
import { note as noteConstants } from "@/constants/note";
import { ParsedNoteItem } from "@/types/type";

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
    ]
  }
})

/**
 * noteの最新記事を取得（サムネイル画像と更新日時を含む）
 * 統合記事一覧用
 */
export async function getNoteArticlesWithThumbnail(limit: number = noteConstants.limit): Promise<ParsedNoteItem[]> {
  try {
    const feed = await parser.parseURL(noteConstants.url);
    return feed.items.slice(0, limit).map((item) => ({
      id: item.guid ?? "",
      title: item.title ?? "",
      url: (item.link ?? item.guid ?? ""),
      thumbnailUrl: item.thumbnail ?? "",
      updatedAt: item.pubDate ?? new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch Note articles:", error);
    // エラー時は空配列を返す
    return [];
  }
}

