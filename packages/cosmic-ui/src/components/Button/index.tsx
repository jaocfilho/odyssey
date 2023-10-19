import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import { type ButtonStylesProps, getButtonStyles } from './styles';
import { Spinner } from '../Spinner';
import { CustomLink } from '../../lib/next/Link';

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
    <CustomLink href={href} className={styles}>
      {children}
    </CustomLink>
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
