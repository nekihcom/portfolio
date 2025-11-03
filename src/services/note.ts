import type { Article } from "@/types/article";

/**
 * noteの最新記事を取得
 * TODO: 実際のAPIに置き換える
 */
export async function getNoteArticles(limit: number = 5): Promise<Article[]> {
  // ダミーデータ
  return Array.from({ length: limit }, (_, i) => ({
    id: `note-${i + 1}`,
    title: `note記事のタイトル ${i + 1}`,
    url: `https://note.com/example/notes/${i + 1}`,
    publishedAt: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));
}

