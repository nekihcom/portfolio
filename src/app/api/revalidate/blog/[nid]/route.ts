import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * 特定のブログ記事詳細ページを再生成するAPI Route
 * 
 * 使用方法:
 * POST /api/revalidate/blog/[nid]
 * 
 * 例: Drupal CMSからWebhookで呼び出し
 * POST /api/revalidate/blog/123
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ nid: string }> }
) {
  try {
    const { nid } = await params;

    if (!nid) {
      return NextResponse.json(
        { error: "nid parameter is required" },
        { status: 400 }
      );
    }

    // 特定の記事詳細ページを再生成
    revalidatePath(`/blog/${nid}`);

    return NextResponse.json({
      revalidated: true,
      message: "Blog article page revalidated successfully",
      path: `/blog/${nid}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error revalidating blog article:", error);
    return NextResponse.json(
      { error: "Error revalidating blog article" },
      { status: 500 }
    );
  }
}
