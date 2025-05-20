import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();

(async () => {
  let jsonFeed = {};
  const feed = await parser.parseURL("https://note.com/nekihcom/rss");
  const items = feed.items.map((data) => {
    return data;
  });
  jsonFeed = items;
  writeFileSync("src/lib/rss/data.json", JSON.stringify(jsonFeed));
})();