/**
 * In-house icon set (no emojis, no third-party icons — per brand guidelines).
 * Main strokes use Cooltra blue (currentColor); the green accent is used
 * sparingly as a highlight, never for text.
 */
const BLUE = '#008aff';
const GREEN = '#05e100';
const ORANGE = '#ec6e24';

export type IconName =
  | 'learn'
  | 'quiz'
  | 'rewards'
  | 'success'
  | 'error'
  | 'search'
  | 'check'
  | 'chevron'
  | 'back'
  | 'close';

const common = {
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function paths(name: IconName) {
  switch (name) {
    case 'learn':
      return (
        <>
          <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H11v15H4.5A1.5 1.5 0 0 1 3 17.5z" stroke={BLUE} {...common} />
          <path d="M21 5.5A1.5 1.5 0 0 0 19.5 4H13v15h6.5a1.5 1.5 0 0 0 1.5-1.5z" stroke={BLUE} {...common} />
          <path d="M12 8h4M12 11h4" stroke={GREEN} {...common} />
        </>
      );
    case 'quiz':
      return (
        <>
          <circle cx="12" cy="12" r="9" stroke={BLUE} {...common} />
          <path d="M9.2 9.2a2.8 2.8 0 1 1 4 2.5c-.8.4-1.2 1-1.2 1.9" stroke={GREEN} {...common} />
          <circle cx="12" cy="16.5" r="0.6" fill={GREEN} stroke={GREEN} />
        </>
      );
    case 'rewards':
      return (
        <>
          <rect x="3" y="9" width="18" height="11" rx="1.5" stroke={BLUE} {...common} />
          <path d="M3 13h18M12 9v11" stroke={BLUE} {...common} />
          <path d="M12 9c-2.5 0-4-1-4-2.5S9.5 4 12 6c2.5-2 4-1 4 .5S14.5 9 12 9z" stroke={GREEN} {...common} />
        </>
      );
    case 'success':
      return (
        <>
          <circle cx="12" cy="12" r="9" stroke={BLUE} {...common} />
          <path d="M8 12.5l2.5 2.5L16 9.5" stroke={GREEN} {...common} />
        </>
      );
    case 'error':
      return (
        <>
          <path d="M12 4 2.5 20h19z" stroke={ORANGE} {...common} />
          <path d="M12 10v4" stroke={ORANGE} {...common} />
          <circle cx="12" cy="17" r="0.6" fill={ORANGE} stroke={ORANGE} />
        </>
      );
    case 'search':
      return (
        <>
          <circle cx="11" cy="11" r="7" stroke={BLUE} {...common} />
          <path d="m20 20-3.5-3.5" stroke={GREEN} {...common} />
        </>
      );
    case 'check':
      return <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" {...common} />;
    case 'chevron':
      return <path d="m9 6 6 6-6 6" stroke="currentColor" {...common} />;
    case 'back':
      return <path d="M15 6 9 12l6 6" stroke="currentColor" {...common} />;
    case 'close':
      return <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" {...common} />;
  }
}

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-hidden="true">
      {paths(name)}
    </svg>
  );
}
