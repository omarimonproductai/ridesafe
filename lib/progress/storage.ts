export type ModuleStatus = 'completed' | 'in-progress' | 'not-started';

export type Progress = {
  completed: string[];
  /** Last visited location per module slug. */
  visited: Record<string, { section: 'learn' | 'quiz'; step: number }>;
};

export const emptyProgress: Progress = { completed: [], visited: {} };

export function markCompleted(p: Progress, slug: string): Progress {
  if (p.completed.includes(slug)) return p;
  return { ...p, completed: [...p.completed, slug] };
}

export function markVisited(
  p: Progress,
  slug: string,
  section: 'learn' | 'quiz',
  step: number,
): Progress {
  return { ...p, visited: { ...p.visited, [slug]: { section, step } } };
}

export function deriveStatus(p: Progress, slug: string): ModuleStatus {
  if (p.completed.includes(slug)) return 'completed';
  if (p.visited[slug]) return 'in-progress';
  return 'not-started';
}

export function completedCount(p: Progress): number {
  return p.completed.length;
}

export function parseProgress(raw: string | null): Progress {
  if (!raw) return emptyProgress;
  try {
    const data = JSON.parse(raw);
    return {
      completed: Array.isArray(data.completed) ? data.completed : [],
      visited: data.visited && typeof data.visited === 'object' ? data.visited : {},
    };
  } catch {
    return emptyProgress;
  }
}
