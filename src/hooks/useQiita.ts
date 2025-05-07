import { useState, useEffect } from 'react';
import { Qiita } from '@/type/type';

export const useQiitas = () => {
  const [qiitas, setQiitas] = useState<Qiita[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQiitas = async () => {
      try {
        const res = await fetch('/api/qiita');
        if (!res.ok) throw new Error('API fetch failed');
        const data = await res.json();
        setQiitas(data.qiitas);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch works'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchQiitas();
  }, []);

  return { qiitas, isLoading, error };
}; 