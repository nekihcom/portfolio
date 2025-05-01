import { JSDOM } from "jsdom";
import ky from "ky";


import { 
  // ParsedQiitaItem, QiitaItemResponse, 
  ParsedNoteItem } from "@/type/type";
import data from "@/rss/data.json";


// SAMPLE
// https://qiita.com/ganja_tuber/items/0fe614ee469b4124a43d
/*
export const getMyAllQiitaPosts = async () => {
  const jsdom = new JSDOM();
  const apiUrl = `${process.env.QIITA_FETCH_BASE}`;
  const res = await ky.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
    },
  });
  const qiitaItems = (await res.json()) as QiitaItemResponse[];
  const ogpUrls: string[] = [];
  for (let i = 0; i < qiitaItems.length; i++) {
    const { url } = qiitaItems[i];
    const res = await ky.get(url);
    const text = await res.text();
    const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
    const headEls = el.head.children;
    Array.from(headEls).map((v) => {
      const prop = v.getAttribute("property");
      if (!prop) return;
      if (prop === "og:image") {
        ogpUrls.push(v.getAttribute("content") ?? "");
      }
    });
  }
  const parsedQiitaItems: ParsedQiitaItem[] = qiitaItems.map(
    (
      {
        coediting,
        comments_count,
        created_at,
        id,
        likes_count,
        page_views_count,
        tags,
        title,
        updated_at,
        url,
        reactions_count,
        private: _private,
      },
      i,
    ) => {
      const parsedItem: ParsedQiitaItem = {
        coediting,
        comments_count,
        created_at,
        id,
        likes_count,
        ogpImageUrl: ogpUrls[i],
        page_views_count,
        private: _private,
        reactions_count,
        tags,
        title,
        updated_at,
        url,
      };
      return parsedItem;
    },
  );

  return {
    qiitaItems: parsedQiitaItems.slice(0,3)
  };
};
*/



// SAMPLE
//https://zenn.dev/hrkmtsmt/articles/fa7d8y9crypnib
// npm run update-rss
export const getMyAllNotePosts = async () => {
  const jsdom = new JSDOM();
  const noteItems = data;
  const ogpUrls: string[] = [];
  for (let i = 0; i < noteItems.length; i++) {
    const { link } = noteItems[i];
    const res = await ky.get(link);
    const text = await res.text();
    const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
    const headEls = el.head.children;
    Array.from(headEls).map((v) => {
      const prop = v.getAttribute("property");
      if (!prop) return;
      if (prop === "og:image") {
        ogpUrls.push(v.getAttribute("content") ?? "");
      }
    });
  };

  const parsedNoteItems: ParsedNoteItem[] = noteItems.map(
    (
      {
        title,
        link,
        pubDate,
        content,
        contentSnippet,
        guid,
        isoDate
      },
      i,
    ) => {
      const parsedItem: ParsedNoteItem = {
        title,
        link,
        pubDate,
        content,
        contentSnippet,
        guid,
        isoDate,
        ogpImageUrl: ogpUrls[i],
      };
      return parsedItem;
    },
  );

  return {
    noteItems: parsedNoteItems.slice(0,3)
  };

}