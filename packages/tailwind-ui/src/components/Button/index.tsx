import { type ButtonHTMLAttributes } from 'react';

import Link from 'next/link';

import { classNames } from '../../utils';
import { type ButtonStylesProps, getButtonStyles } from './styles';
import { Spinner } from '../Spinner';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylesProps & {
    loading?: boolean;
    href?: string;
  };

export function Button({
  className,
  size,
  colorScheme,
  children,
  loading,
  disabled,
  href,
  ...rest
}: ButtonProps) {
  const styles = getButtonStyles({ size, colorScheme });

  const isDisabled = disabled || loading;

  return href ? (
    <Link href={href} className={styles}>
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={classNames(styles, className ?? '')}
      {...rest}
      disabled={isDisabled}
    >
      {loading ? <Spinner className={children ? 'mr-3' : undefined} /> : null}
      {children}
    </button>
  );
}
