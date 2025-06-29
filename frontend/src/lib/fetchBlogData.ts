import { microCMSClient } from './microcms';
import { BlogPost } from '@/types/type';

/**
 * ブログ記事詳細を取得する関数
 * @param id - ブログ記事のID
 */
export async function fetchBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
      return null;
    }

    const post = await microCMSClient.getBlogPost(id);
    return post;
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return null;
  }
}

/**
 * ブログ記事一覧を取得する関数
 * @param limit - 取得件数（デフォルト: 10）
 */
export async function fetchBlogPosts(limit: number = 10): Promise<BlogPost[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
      return [];
    }

    const posts = await microCMSClient.getBlogPosts(limit);
    return posts;
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
} 