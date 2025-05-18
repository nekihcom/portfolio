import { Work, Blog, QiitaResponse } from "@/type/type";

const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
const MICROCMS_API_URL = process.env.NEXT_PUBLIC_MICROCMS_API_URL;
const QIITA_FETCH_BASE = process.env.QIITA_FETCH_BASE;
const QIITA_TOKEN = process.env.QIITA_TOKEN;

if (!MICROCMS_API_KEY) {
  throw new Error('Required environment variables <MICROCMS_API_KEY> are not set');
}
if (!MICROCMS_API_URL) {
  throw new Error('Required environment variables <MICROCMS_API_URL> are not set');
}
if (!QIITA_FETCH_BASE) {
  throw new Error('Required environment variables <QIITA_FETCH_BASE> are not set');
}
if (!QIITA_TOKEN) {
  throw new Error('Required environment variables <QIITA_TOKEN> are not set');
}


export async function getQiita(): Promise<QiitaResponse[]> {
  const response = await fetch(`${QIITA_FETCH_BASE}`, {
    headers: {
      "Authorization": `Bearer ${QIITA_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch qiita articles");
  }

  const data = await response.json();
  return data;
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


export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch(`${MICROCMS_API_URL}/blog`, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY as string,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await response.json();
  return data.contents;
}

export async function getBlog(path: string): Promise<Blog | null> {
  const res = await fetch(`${MICROCMS_API_URL}/blog/${path}`, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY as string,
    },
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch blog");
  }

  return res.json();
} 

// ページネーション用のブログ取得関数
export async function getPaginatedBlogs(
  offset: number = 0,
  limit: number = 9
): Promise<Blog[]> {
  const response = await fetch(
    `${MICROCMS_API_URL}/blog?offset=${offset}&limit=${limit}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY as string,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await response.json();
  return data.contents;
} 