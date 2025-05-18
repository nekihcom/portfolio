import { useState, useCallback } from 'react';

export const useInfiniteScroll = <T>(
  initialItems: T[],
  loadMore: () => Promise<T[]>,
  itemsPerPage: number = 9,
  loadingThreshold: number = 200
): {
  displayedItems: T[];
  isLoading: boolean;
  hasMore: boolean;
  containerRef: (node: HTMLDivElement | null) => void;
} => {
  const [displayedItems, setDisplayedItems] = useState<T[]>(initialItems.slice(0, itemsPerPage));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  
  const handleLoadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const newItems = await loadMore();
      
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedItems((prevDisplayed) => [...prevDisplayed, ...newItems.slice(0, itemsPerPage)]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error('エラーが発生しました:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page, loadMore, itemsPerPage]);

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !isLoading && hasMore) {
            handleLoadMore();
          }
        },
        {
          root: null,
          rootMargin: `0px 0px ${loadingThreshold}px 0px`,
          threshold: 0.1,
        }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [isLoading, hasMore, handleLoadMore, loadingThreshold]);

  return { displayedItems, isLoading, hasMore, containerRef };
}; 