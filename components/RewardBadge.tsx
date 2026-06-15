import { Icon } from './Icon';

export function RewardBadge({ label }: { label: string }) {
  // Visual only — no integration with the Cooltra app in this release.
  return (
    <span className="reward-badge">
      <Icon name="rewards" size={18} />
      {label}
    </span>
  );
}
