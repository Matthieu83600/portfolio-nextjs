'use client';

import { useCallback, useSyncExternalStore } from 'react';

export const useMediaQuery = (matchMediaQuery = 'max-width: 767px') => {
  const query = `(${matchMediaQuery})`;
  const subscribe = useCallback(
    (callback: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', callback);
      return () => {
        media.removeEventListener('change', callback);
      };
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
};