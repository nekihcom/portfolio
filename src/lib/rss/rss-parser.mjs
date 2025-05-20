import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser(
  {
    customFields: {
      item: ['media:thumbnail'],
    },
  }
);

(async () => {
  let jsonFeed = {};
  const feed = await parser.parseURL("https://note.com/nekihcom/rss");
  const items = feed.items.map((data) => {
    return {
      title: data.title,
      link: data.link,
      pubDate: data.pubDate,
      thumbnail: data['media:thumbnail'],
    };
  });
  jsonFeed = items;
  writeFileSync("src/lib/rss/data.json", JSON.stringify(jsonFeed));
})();