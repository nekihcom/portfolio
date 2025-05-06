import { Work } from "@/type/type";

const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
const MICROCMS_API_URL = process.env.NEXT_PUBLIC_MICROCMS_API_URL;

if (!MICROCMS_API_KEY || !MICROCMS_API_URL) {
  throw new Error('Required environment variables are not set');
}

export async function getWorks(): Promise<Work[]> {
  const response = await fetch(`${MICROCMS_API_URL}/work`, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY as string,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch works");
  }

  const data = await response.json();
  return data.contents;
}

export async function getWork(path: string): Promise<Work | null> {
  const res = await fetch(`${MICROCMS_API_URL}/work/${path}`, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY as string,
    },
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch work");
  }

  return res.json();
} 