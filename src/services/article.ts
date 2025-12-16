import type { IArticle } from "@/types/type";
import { fetchNoteArticles } from "@/services/note";
import { fetchQiitaArticles } from "@/services/qiita";
import dayjs from "dayjs";

/**
 * ブログ記事一覧を取得（note.comとQiitaから統合）
 */
export async function getArticlesList(limit: number = 0): Promise<IArticle[]> {
  try {
    // note.comとQiitaを並列取得（Promise.allSettledで片方が失敗しても他方は取得）
    const results = await Promise.allSettled([
      fetchNoteArticles(),
      fetchQiitaArticles(),
    ]);

    // 成功した結果をマージ
    const allArticles: IArticle[] = [];
    
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        allArticles.push(...result.value);
      } else {
        const source = index === 0 ? "note" : "Qiita";
        console.error(`Failed to fetch articles from ${source}:`, result.reason);
      }
    });

    // 日付でソート（新しい順 = 降順）
    allArticles.sort((a, b) => {
      const dateA = dayjs(a.created_dt);
      const dateB = dayjs(b.created_dt);
      return dateB.diff(dateA); // 降順（新しい順）
    });

    // limitが指定されている場合は件数制限
    let articles = allArticles;
    if (typeof limit === "number" && limit > 0) {
      articles = allArticles.slice(0, limit);
    }

    return articles;
  } catch (error) {
    console.error("Failed to get blog articles list:", error);
    return [];
  }
}