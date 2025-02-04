import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import api from '@/api';
import { getItem, setItem } from '@/lib/utils/localStorage';
const STALE_TIME = 1 * 60 * 1000; // 5 minutes

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const storageKey = useMemo(() => {
    if (!options) {
      return url;
    }
    return `${url}?${JSON.stringify(options)}`;
  }, [options, url]);

  // Abort controller to cancel the fetch request when component unmounts
  const abortController = useRef(null);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const cachedData = getItem(storageKey);
    if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
      setData(cachedData.data);
      setIsLoading(false);
      return;
    }

    abortController.current = new AbortController();

    const fetchData = async () => {
      try {
        const response = await api.get(url, {
          params: options,
          signal: abortController.current?.signal,
        });

        setData(response.data);
        setItem(storageKey, { lastFetched: currentTime, data: response.data });
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [url, options, storageKey]);

  return [data, isLoading, error];
};

export default useFetch;
