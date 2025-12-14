import type { IBlogArticle } from "@/types/type";

/**
 * ブログ記事一覧を取得
 */
export async function getBlogArticlesList(limit: number = 0): Promise<IBlogArticle[]> {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/get/articles`, {
      next: { revalidate: 3600 } // ISR: 1時間ごとに再生成
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog articles: ${response.status}`);
    }
    
    const data = await response.json();

    let articles = data as IBlogArticle[];
    if (typeof limit === "number" && limit > 0) {
      articles = articles.slice(0, limit);
    }
    return articles;
  } catch (error) {
    console.error("Failed to fetch blog articles:", error);
    return [];
  }
}



/**
 * ブログ記事を取得
 */
export async function getBlogArticle(nid: string): Promise<IBlogArticle | null> {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/get/article/${nid}`, {
      next: { revalidate: 3600 } // ISR: 1時間ごとに再生成
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog article: ${response.status}`);
    }
    
    const data = await response.json();

    const article = (data as IBlogArticle[])[0];
    return article;
  } catch (error) {
    console.error("Failed to fetch blog article:", error);
    return null;
  }
}
