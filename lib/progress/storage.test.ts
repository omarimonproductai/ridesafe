import {
  emptyProgress,
  markCompleted,
  markVisited,
  deriveStatus,
  completedCount,
  parseProgress,
} from './storage';

describe('progress storage', () => {
  it('marks a module as completed once', () => {
    let p = markCompleted(emptyProgress, 'ebike-basics');
    p = markCompleted(p, 'ebike-basics');
    expect(p.completed).toEqual(['ebike-basics']);
    expect(completedCount(p)).toBe(1);
  });

  it('derives status from completion and visits', () => {
    expect(deriveStatus(emptyProgress, 'x')).toBe('not-started');

    const visited = markVisited(emptyProgress, 'x', 'learn', 2);
    expect(deriveStatus(visited, 'x')).toBe('in-progress');

    const completed = markCompleted(visited, 'x');
    expect(deriveStatus(completed, 'x')).toBe('completed');
  });

  it('parses stored JSON and tolerates garbage', () => {
    const raw = JSON.stringify({ completed: ['a'], visited: {} });
    expect(parseProgress(raw).completed).toEqual(['a']);
    expect(parseProgress(null)).toEqual(emptyProgress);
    expect(parseProgress('not-json')).toEqual(emptyProgress);
  });
});
