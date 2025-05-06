import { Work } from "@/type/type";

const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
const MICROCMS_API_URL = process.env.NEXT_PUBLIC_MICROCMS_API_URL;

if (!MICROCMS_API_KEY) {
  throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is not defined");
}

if (!MICROCMS_API_URL) {
  throw new Error("NEXT_PUBLIC_MICROCMS_API_URL is not defined");
}

// 型アサーションを使用して、環境変数が定義されていることを保証
const apiKey: string = MICROCMS_API_KEY;
const apiUrl: string = MICROCMS_API_URL;

export async function getWorks(): Promise<Work[]> {
  const response = await fetch(`${apiUrl}/work`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch works");
  }

  const data = await response.json();
  return data.contents;
} 