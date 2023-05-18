import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import { type ButtonStylesProps, getStyles } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylesProps;

export function Button({
  className,
  size = 'md',
  colorScheme = 'emerald',
  ...rest
}: ButtonProps) {
  const styles = getStyles({ size, colorScheme });

  return (
    <button
      type="button"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
