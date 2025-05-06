import { useState, useEffect } from 'react';
import { Work } from '@/type/type';
import { getWorks } from '@/lib/microcms';

export const useWorks = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data = await getWorks();
        setWorks(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch works'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return { works, isLoading, error };
}; 