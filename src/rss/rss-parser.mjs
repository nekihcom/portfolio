import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();

const rssUrl = "https://note.com/nekihcom/rss";

(async () => {
  let jsonFeed = {};
  const feed = await parser.parseURL(rssUrl);
  const items = feed.items.map((data) => {
    return data;
  });
  jsonFeed = items;
  writeFileSync("src/rss/data.json", JSON.stringify(jsonFeed));
})();