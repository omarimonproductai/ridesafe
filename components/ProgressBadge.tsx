export function ProgressBadge({ current, total }: { current: number; total: number }) {
  return (
    <span className="progress-badge">
      {current} / {total}
    </span>
  );
}
