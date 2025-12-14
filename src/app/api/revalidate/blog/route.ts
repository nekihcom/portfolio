import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * ブログ記事一覧ページを再生成するAPI Route
 * 
 * 使用方法:
 * POST /api/revalidate/blog
 * 
 * 例: Drupal CMSからWebhookで呼び出し
 */
export async function POST(request: NextRequest) {
  try {
    // 記事一覧ページを再生成
    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      message: "Blog list page revalidated successfully",
      path: "/blog",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error revalidating blog list:", error);
    return NextResponse.json(
      { error: "Error revalidating blog list" },
      { status: 500 }
    );
  }
}
