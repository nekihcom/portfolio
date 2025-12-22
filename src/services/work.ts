import { IWork } from "@/types/type";
import { microCmsClient } from "./microcms";


// microCMSからブログ記事を取得
export async function getWorksList(limit: number = 0): Promise<IWork[]> {
  const data = await microCmsClient.get({
    endpoint: 'work',
    queries: {
      // fields: 'id,title',  // idとtitleを取得
      limit: limit,
    },
  });
  return data.contents;
}