import { NextRequest, NextResponse } from "next/server";
import { fetchAndUnifyArticles, saveArticlesToJson } from "@/services/unified-articles";

/**
 * Vercel Cron Jobsから呼び出されるエンドポイント
 * noteとQiitaの記事を取得して統合し、JSONファイルに保存する
 */
export async function GET(request: NextRequest) {
  try {
    // 認証トークンの確認
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;
    const isDevelopment = process.env.NODE_ENV === "development";

    // 開発環境では認証をスキップ
    if (!isDevelopment && cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 記事を取得して統合
    const articles = await fetchAndUnifyArticles();

    // JSONファイルに保存
    await saveArticlesToJson(articles);

    return NextResponse.json({
      success: true,
      message: `Successfully updated ${articles.length} articles`,
      count: articles.length,
    });
  } catch (error) {
    console.error("Failed to update articles:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

