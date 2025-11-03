import { qiita as qiitaConstants } from "@/constants/qiita";
import type { QiitaArticle } from "@/types/type";


/**
 * Qiitaの最新記事を取得（APIから）
 */
export async function getQiitaArticles(
  limit: number = qiitaConstants.limit
): Promise<QiitaArticle[]> {
  try {
    const response = await fetch(
      `${qiitaConstants.url}?per_page=${limit}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    );

    if (!response.ok) {
      throw new Error(`Qiita API error: ${response.status}`);
    }

    const data: QiitaArticle[] = await response.json();

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      publishedAt: item.publishedAt || new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch Qiita articles:", error);
    // エラー時は空配列を返す
    return [];
  }
}

