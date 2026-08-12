import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";
import type { ExtendedRecordMap } from "notion-types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notionCompat = new NotionCompatAPI(notion);

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const PUBLISHED_STATUS = "完了";

export type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  publishedAt: string;
  ogpImageUrl: string | null;
};

function toPost(page: PageObjectResponse): Post {
  const props = page.properties;

  const title =
    props["タイトル"]?.type === "title"
      ? props["タイトル"].title.map((t) => t.plain_text).join("")
      : "";

  const slug =
    props["スラッグ"]?.type === "rich_text"
      ? props["スラッグ"].rich_text.map((t) => t.plain_text).join("")
      : "";

  const summary =
    props["概要"]?.type === "rich_text"
      ? props["概要"].rich_text.map((t) => t.plain_text).join("")
      : "";

  const tags =
    props["タグ"]?.type === "multi_select"
      ? props["タグ"].multi_select.map((t) => t.name)
      : [];

  const publishedAt =
    props["公開日"]?.type === "date" ? props["公開日"].date?.start ?? "" : "";

  const ogpFile =
    props["OGP画像"]?.type === "files" ? props["OGP画像"].files[0] : undefined;
  const ogpImageUrl =
    ogpFile?.type === "external"
      ? ogpFile.external.url
      : ogpFile?.type === "file"
        ? ogpFile.file.url
        : null;

  return { id: page.id, title, slug, summary, tags, publishedAt, ogpImageUrl };
}

export async function getPublishedPosts(): Promise<Post[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "ステータス",
      status: { equals: PUBLISHED_STATUS },
    },
    sorts: [{ property: "公開日", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map(toPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "ステータス", status: { equals: PUBLISHED_STATUS } },
        { property: "スラッグ", rich_text: { equals: slug } },
      ],
    },
    page_size: 1,
  });

  const page = response.results[0];
  if (!page || !("properties" in page)) return null;

  return toPost(page as PageObjectResponse);
}

export async function getPostRecordMap(
  pageId: string,
): Promise<ExtendedRecordMap> {
  return notionCompat.getPage(pageId);
}
