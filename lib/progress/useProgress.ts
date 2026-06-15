'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  type Progress,
  emptyProgress,
  parseProgress,
  markCompleted as _markCompleted,
  markVisited as _markVisited,
  deriveStatus,
  completedCount,
} from './storage';

const STORAGE_KEY = 'cra:progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(parseProgress(window.localStorage.getItem(STORAGE_KEY)));
    setHydrated(true);
  }, []);

  const persist = useCallback((next: Progress) => {
    setProgress(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const markCompleted = useCallback(
    (slug: string) => persist(_markCompleted(progress, slug)),
    [persist, progress],
  );

  const markVisited = useCallback(
    (slug: string, section: 'learn' | 'quiz', step: number) =>
      persist(_markVisited(progress, slug, section, step)),
    [persist, progress],
  );

  return {
    hydrated,
    progress,
    completedCount: completedCount(progress),
    status: (slug: string) => deriveStatus(progress, slug),
    markCompleted,
    markVisited,
  };
}
