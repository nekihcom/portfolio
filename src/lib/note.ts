const NOTE_RSS_URL = "https://note.com/nekihcom/rss";

export type Post = {
  id: string;
  title: string;
  url: string;
  summary: string;
  publishedAt: string;
  ogpImageUrl: string | null;
};

function extractTag(itemXml: string, tag: string): string | null {
  const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? match[1] : null;
}

function decodeCdata(value: string): string {
  const match = value.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return match ? match[1] : value;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// noteのdescriptionは記事冒頭のHTML抜粋+「続きをみる」リンクなので、
// リンクを除去してテキストのみのsummaryに変換する
function descriptionToSummary(description: string): string {
  const withoutTrailingLink = decodeCdata(description).replace(
    /<a\s[^>]*>[\s\S]*?<\/a>/g,
    "",
  );
  const plainText = withoutTrailingLink
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return decodeEntities(plainText);
}

function toPost(itemXml: string): Post | null {
  const title = extractTag(itemXml, "title");
  const link = extractTag(itemXml, "link");
  const guid = extractTag(itemXml, "guid");
  const pubDate = extractTag(itemXml, "pubDate");
  const description = extractTag(itemXml, "description");
  const thumbnail = extractTag(itemXml, "media:thumbnail");

  if (!title || !link) return null;

  return {
    id: (guid ?? link).trim(),
    title: decodeEntities(title.trim()),
    url: link.trim(),
    summary: description ? descriptionToSummary(description) : "",
    publishedAt: pubDate?.trim() ?? "",
    ogpImageUrl: thumbnail?.trim() ?? null,
  };
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(NOTE_RSS_URL, { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error(`Failed to fetch note RSS: ${response.status}`);
  }

  const xml = await response.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items
    .map(toPost)
    .filter((post): post is Post => post !== null);
}
