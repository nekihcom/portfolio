import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
  S3ServiceException,
} from "@aws-sdk/client-s3";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL!;

// Cloudflare Workers(workerd)はNode.jsのhttp/httpsモジュールを完全にはサポートしないため、
// デフォルトのNodeHttpHandlerではなくfetchベースのハンドラを明示的に使う
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
  requestHandler: new FetchHttpHandler(),
});

function extensionFromUrl(url: string): string {
  const pathname = new URL(url).pathname;
  const match = /\.([a-zA-Z0-9]{1,5})$/.exec(pathname);
  return match ? match[1] : "bin";
}

/**
 * Notionの署名付きURLのpathname（署名クエリを除いた部分）から短いハッシュを導出する。
 * Notion側で画像を差し替えるとpathnameのファイルIDが変わるため、これをR2オブジェクトキーに
 * 含めることで差し替え後は自動的に別キーとなり、古い画像が永久に配信され続ける事態を防ぐ。
 */
async function contentHashFromUrl(url: string): Promise<string> {
  const pathname = new URL(url).pathname;
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(pathname),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 16);
}

async function objectExists(key: string): Promise<boolean> {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    return true;
  } catch (e) {
    // 404は「未存在」を意味する正常系だが、403等の権限・設定不備は握りつぶさず
    // 呼び出し元（persistImageToR2の失敗隔離）に伝播させる
    if (e instanceof S3ServiceException && e.$metadata.httpStatusCode === 404) {
      return false;
    }
    throw e;
  }
}

/**
 * Notionの署名付き画像URLをCloudflare R2にコピーし、永続的な公開URLを返す。
 * 同じキーが既に存在する場合はアップロードをスキップする。
 */
export async function persistImageToR2(
  sourceUrl: string,
  key: string,
): Promise<string> {
  const ext = extensionFromUrl(sourceUrl);
  const contentHash = await contentHashFromUrl(sourceUrl);
  const objectKey = `${key}-${contentHash}.${ext}`;

  if (!(await objectExists(objectKey))) {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image for R2 persistence: ${sourceUrl} (${response.status})`,
      );
    }
    const body = Buffer.from(await response.arrayBuffer());
    const contentType =
      response.headers.get("content-type") ?? "application/octet-stream";

    await s3.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: objectKey,
        Body: body,
        ContentType: contentType,
      }),
    );
  }

  return `${R2_PUBLIC_URL}/${objectKey}`;
}
