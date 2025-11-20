import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { getNoteArticlesWithThumbnail } from "@/services/note";
import { getQiitaArticlesWithOgp } from "@/services/qiita";
import type { UnifiedArticle } from "@/types/type";
import type { ArticleSourceId } from "@/constants/article-sources";
import { note as noteConstants } from "@/constants/note";
import { qiita as qiitaConstants } from "@/constants/qiita";

const ARTICLES_JSON_PATH = path.join(process.cwd(), "data", "articles.json");

/**
 * URLからUUIDを生成（URLベースのハッシュ）
 */
function generateUuidFromUrl(url: string): string {
  const hash = createHash("sha256").update(url).digest("hex");
  // UUID形式（8-4-4-4-12）に変換
  return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-${hash.substring(12, 16)}-${hash.substring(16, 20)}-${hash.substring(20, 32)}`;
}

/**
 * noteとQiitaの記事を取得して統合
 */
export async function fetchAndUnifyArticles(): Promise<UnifiedArticle[]> {
  try {
    // noteの記事を取得
    const noteArticles = await getNoteArticlesWithThumbnail(noteConstants.limit);
    
    // Qiitaの記事を取得（OGP画像含む）
    const qiitaApiUrl = process.env.QIITA_API_URL || `https://qiita.com/api/v2/users/nekihcom/items?per_page=${qiitaConstants.limit}`;
    const qiitaArticles = await getQiitaArticlesWithOgp(qiitaApiUrl, 0); // バッチ処理ではキャッシュしない

    // noteの記事をUnifiedArticle形式に変換
    const noteSource: ArticleSourceId = "note";
    const unifiedNoteArticles: UnifiedArticle[] = noteArticles.map((article) => ({
      uuid: generateUuidFromUrl(article.url),
      title: article.title,
      url: article.url,
      thumbnailUrl: article.thumbnailUrl,
      updatedAt: article.updatedAt,
      source: noteSource,
    }));

    // Qiitaの記事をUnifiedArticle形式に変換
    const qiitaSource: ArticleSourceId = "qiita";
    const unifiedQiitaArticles: UnifiedArticle[] = qiitaArticles.map((article) => ({
      uuid: generateUuidFromUrl(article.url),
      title: article.title,
      url: article.url,
      thumbnailUrl: article.ogpImageUrl,
      updatedAt: article.updated_at,
      source: qiitaSource,
    }));

    // 両方の記事を統合
    const allArticles = [...unifiedNoteArticles, ...unifiedQiitaArticles];

    // 更新日時で降順ソート（新しい順）
    allArticles.sort((a, b) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return dateB - dateA;
    });

    return allArticles;
  } catch (error) {
    console.error("Failed to fetch and unify articles:", error);
    throw error;
  }
}

/**
 * 統合した記事をJSONファイルに保存
 */
export async function saveArticlesToJson(articles: UnifiedArticle[]): Promise<void> {
  try {
    // dataディレクトリが存在しない場合は作成
    const dataDir = path.dirname(ARTICLES_JSON_PATH);
    await fs.mkdir(dataDir, { recursive: true });

    // JSONファイルに保存
    await fs.writeFile(
      ARTICLES_JSON_PATH,
      JSON.stringify(articles, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Failed to save articles to JSON:", error);
    throw error;
  }
}

/**
 * JSONファイルから記事一覧を読み込み
 * ファイルが存在しない場合は、APIから直接記事を取得して保存する
 */
export async function loadArticlesFromJson(): Promise<UnifiedArticle[]> {
  try {
    const fileContent = await fs.readFile(ARTICLES_JSON_PATH, "utf-8");
    const articles = JSON.parse(fileContent) as UnifiedArticle[];
    return articles;
  } catch (error) {
    // ファイルが存在しない場合は、APIから直接記事を取得
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.warn("Articles JSON file not found, fetching articles from API...");
      try {
        // APIから記事を取得
        const articles = await fetchAndUnifyArticles();
        
        // 取得した記事をJSONファイルに保存（次回以降のビルドで使用）
        // 保存に失敗しても、取得した記事は返す
        try {
          await saveArticlesToJson(articles);
          console.log(`Successfully fetched and saved ${articles.length} articles`);
        } catch (saveError) {
          console.warn("Failed to save articles to JSON, but returning fetched articles:", saveError);
        }
        
        return articles;
      } catch (fetchError) {
        console.error("Failed to fetch articles from API:", fetchError);
        // API取得に失敗した場合は空配列を返す（既存の動作を維持）
        return [];
      }
    }
    console.error("Failed to load articles from JSON:", error);
    throw error;
  }
}

