import type { Article } from "@/types/article";

/**
 * Qiitaの最新記事を取得
 * TODO: 実際のAPIに置き換える
 */
export async function getQiitaArticles(limit: number = 5): Promise<Article[]> {
  // ダミーデータ
  return Array.from({ length: limit }, (_, i) => ({
    id: `qiita-${i + 1}`,
    title: `Qiita記事のタイトル ${i + 1}`,
    url: `https://qiita.com/example/items/${i + 1}`,
    publishedAt: new Date(Date.now() - i * 5 * 24 * 60 * 60 * 1000).toISOString(),
  }));
}

