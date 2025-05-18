import { useState, useEffect } from 'react';
import { Blog } from '@/type/type';
import { getBlogs } from '@/lib/microcms';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch blogs'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, isLoading, error };
}; 