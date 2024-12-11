'use client';
import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (matchMediaQuery = 'max-width: 767px') => {
  const [targetReached, setTargetReached] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(${matchMediaQuery})`);
    media.addEventListener('change', updateTarget);

    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener('change', updateTarget);
  }, [matchMediaQuery, updateTarget]);

  return targetReached;
};
