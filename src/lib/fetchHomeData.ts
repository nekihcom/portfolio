import { microCMSClient } from './microcms';
import { Work, BlogPost } from '@/types/type';

/**
 * トップページ用のmicroCMSデータ取得関数
 * 取得失敗時は空配列を返す
 */
export async function fetchHomeData() {
  let works: Work[] = [];
  let posts: BlogPost[] = [];

  try {
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
    } else {
      const [worksData, postsData] = await Promise.allSettled([
        microCMSClient.getWorks(6),
        microCMSClient.getBlogPosts(6)
      ]);
      if (worksData.status === 'fulfilled' && worksData.value.length > 0) {
        works = worksData.value;
      } else {
        console.warn('Failed to fetch works from microCMS');
      }
      if (postsData.status === 'fulfilled' && postsData.value.length > 0) {
        posts = postsData.value;
      } else {
        console.warn('Failed to fetch blog posts from microCMS');
      }
    }
  } catch (error) {
    console.error('Unexpected error while fetching data:', error);
  }
  return { works, posts };
} 