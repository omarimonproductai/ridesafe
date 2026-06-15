import Link from 'next/link';

type CommonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

type LinkProps = CommonProps & { href: string };
type ButtonProps = CommonProps & {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
};

function className(variant: CommonProps['variant']) {
  return variant === 'secondary' ? 'cta cta--secondary' : 'cta';
}

export function CTALink({ href, children, variant = 'primary' }: LinkProps) {
  return (
    <Link href={href} className={className(variant)}>
      {children}
    </Link>
  );
}

export function CTAButton({
  onClick,
  disabled,
  type = 'button',
  children,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className(variant)}>
      {children}
    </button>
  );
}
