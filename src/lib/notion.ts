import { cache } from "react";
import { Client } from "@notionhq/client";
import type { SupportedFetch } from "@notionhq/client/build/src/fetch-types";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionCompatAPI } from "notion-compat";
import type { ExtendedRecordMap } from "notion-types";
import { persistImageToR2 } from "./r2";

// @notionhq/clientはデフォルトでnode-fetchを使うが、Cloudflare Workers(workerd)では
// Node.jsのhttp/httpsモジュール実装が完全にはサポートされないため、標準のfetchを明示的に使う
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  fetch: globalThis.fetch as unknown as SupportedFetch,
});
const notionCompat = new NotionCompatAPI(notion);

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const WORKS_DATABASE_ID = process.env.NOTION_WORKS_DATABASE_ID!;

export type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  publishedAt: string;
  ogpImageUrl: string | null;
};

async function toPost(page: PageObjectResponse): Promise<Post> {
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
    props["公開日"]?.type === "date" ? (props["公開日"].date?.start ?? "") : "";

  const ogpFile =
    props["OGP画像"]?.type === "files" ? props["OGP画像"].files[0] : undefined;
  const rawOgpImageUrl =
    ogpFile?.type === "external"
      ? ogpFile.external.url
      : ogpFile?.type === "file"
        ? ogpFile.file.url
        : null;

  const ogpImageUrl = rawOgpImageUrl
    ? await persistImageToR2(rawOgpImageUrl, `ogp/${page.id}`).catch(
        (e: unknown) => {
          console.error(
            `Failed to persist OGP image to R2 for page ${page.id}:`,
            e,
          );
          return rawOgpImageUrl;
        },
      )
    : null;

  return { id: page.id, title, slug, summary, tags, publishedAt, ogpImageUrl };
}

export async function getPublishedPosts(): Promise<Post[]> {
  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "公開",
        checkbox: { equals: true },
      },
      sorts: [{ property: "公開日", direction: "descending" }],
      start_cursor: cursor,
    });

    pages.push(
      ...response.results.filter(
        (page): page is PageObjectResponse => "properties" in page,
      ),
    );
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  const posts = await Promise.all(pages.map(toPost));
  // 「スラッグ」未設定の記事はリンク先が生成できないため一覧・サイトマップから除外する
  return posts.filter((post) => post.slug !== "");
}

export type WorkItem = {
  id: string;
  slug: string;
  year: string;
  engagement: string;
  title: string;
  description: string;
  tags: string[];
  order: number;
  thumbnailUrl: string | null;
};

async function toWorkItem(page: PageObjectResponse): Promise<WorkItem> {
  const props = page.properties;

  const title =
    props["タイトル"]?.type === "title"
      ? props["タイトル"].title.map((t) => t.plain_text).join("")
      : "";

  const slug =
    props["スラッグ"]?.type === "rich_text"
      ? props["スラッグ"].rich_text.map((t) => t.plain_text).join("")
      : "";

  const year =
    props["年"]?.type === "rich_text"
      ? props["年"].rich_text.map((t) => t.plain_text).join("")
      : "";

  const engagement =
    props["稼働形態"]?.type === "select"
      ? (props["稼働形態"].select?.name ?? "")
      : "";

  const description =
    props["概要"]?.type === "rich_text"
      ? props["概要"].rich_text.map((t) => t.plain_text).join("")
      : "";

  const tags =
    props["タグ"]?.type === "multi_select"
      ? props["タグ"].multi_select.map((t) => t.name)
      : [];

  const order =
    props["並び順"]?.type === "number" ? (props["並び順"].number ?? 0) : 0;

  const thumbnailFile =
    props["サムネイル"]?.type === "files"
      ? props["サムネイル"].files[0]
      : undefined;
  const rawThumbnailUrl =
    thumbnailFile?.type === "external"
      ? thumbnailFile.external.url
      : thumbnailFile?.type === "file"
        ? thumbnailFile.file.url
        : null;

  const thumbnailUrl = rawThumbnailUrl
    ? await persistImageToR2(rawThumbnailUrl, `works/${page.id}`).catch(
        (e: unknown) => {
          console.error(
            `Failed to persist thumbnail image to R2 for page ${page.id}:`,
            e,
          );
          return rawThumbnailUrl;
        },
      )
    : null;

  return {
    id: page.id,
    slug,
    year,
    engagement,
    title,
    description,
    tags,
    order,
    thumbnailUrl,
  };
}

export async function getWorks(): Promise<WorkItem[]> {
  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.databases.query({
      database_id: WORKS_DATABASE_ID,
      filter: {
        property: "公開",
        checkbox: { equals: true },
      },
      start_cursor: cursor,
    });

    pages.push(
      ...response.results.filter(
        (page): page is PageObjectResponse => "properties" in page,
      ),
    );
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  const works = await Promise.all(pages.map(toWorkItem));
  return works.sort((a, b) => a.order - b.order);
}

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          { property: "公開", checkbox: { equals: true } },
          { property: "スラッグ", rich_text: { equals: slug } },
        ],
      },
      page_size: 1,
    });

    const page = response.results[0];
    if (!page || !("properties" in page)) return null;

    return toPost(page as PageObjectResponse);
  },
);

export async function getPostRecordMap(
  pageId: string,
): Promise<ExtendedRecordMap> {
  const recordMap = await notionCompat.getPage(pageId);

  await Promise.all(
    Object.entries(recordMap.block).map(async ([blockId, entry]) => {
      const wrapped = entry?.value;
      if (!wrapped) return;
      const block = "type" in wrapped ? wrapped : wrapped.value;
      if (block.type !== "image") return;

      // notion-compatが生成するcaptionはreact-notion-xの期待する形式と噛み合わずクラッシュするため無効化する
      // (参考: https://github.com/NotionX/react-notion-x/tree/master/packages/notion-compat#known-issues)
      delete block.properties.caption;

      const sourceUrl = block.properties?.source?.[0]?.[0];
      if (!sourceUrl) return;

      const persistedUrl = await persistImageToR2(
        sourceUrl,
        `blocks/${blockId}`,
      ).catch((e: unknown) => {
        console.error(
          `Failed to persist block image to R2 for block ${blockId}:`,
          e,
        );
        return sourceUrl;
      });
      block.properties.source = [[persistedUrl]];
    }),
  );

  return recordMap;
}
