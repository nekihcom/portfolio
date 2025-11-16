import type { ParsedQiitaItem, QiitaItemResponse } from "@/types/type";
import { getOgpImageUrl } from "@/services/ogp";

/**
 * Qiitaの記事を詳細情報（OGP画像含む）とともに取得
 * @param apiUrl Qiita APIのURL（環境変数から取得した完全なURL）
 * @param revalidateSeconds キャッシュの再検証間隔（秒）
 * @returns パース済みのQiita記事配列
 */
export async function getQiitaArticlesWithOgp(
  apiUrl: string,
  revalidateSeconds: number = 60 * 10,
): Promise<ParsedQiitaItem[]> {
  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
    next: { revalidate: revalidateSeconds },
  });

  if (!res.ok) {
    throw new Error(`Qiita API error: ${res.status}`);
  }

  const qiitaItems = (await res.json()) as QiitaItemResponse[];

  // OGP画像を並列取得
  const ogpPromises = qiitaItems.map((item) => getOgpImageUrl(item.url));
  const ogpUrls = await Promise.all(ogpPromises);

  const parsedQiitaItems: ParsedQiitaItem[] = qiitaItems.map(
    (
      {
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
      },
      i,
    ) => {
      const parsedItem: ParsedQiitaItem = {
        coediting,
        comments_count,
        created_at,
        id,
        likes_count,
        ogpImageUrl: ogpUrls[i] || "",
        page_views_count,
        private: _private,
        reactions_count,
        tags,
        title,
        updated_at,
        url,
      };
      return parsedItem;
    },
  );

  return parsedQiitaItems;
}

