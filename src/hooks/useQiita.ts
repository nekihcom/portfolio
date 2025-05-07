import { useState, useEffect } from 'react';
import { ParsedQiitaItem } from '@/type/type';

export const useQiitas = () => {
  const [qiitas, setQiitas] = useState<ParsedQiitaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQiitas = async () => {
      try {
        const res = await fetch('/api/qiita');
        if (!res.ok) throw new Error('API fetch failed');
        const data = await res.json();
        setQiitas(data.qiitaItems || []);
      } catch (err) {
        console.error('Qiita fetch error:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch Qiita articles'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchQiitas();
  }, []);

  return { qiitas, isLoading, error };
}; 