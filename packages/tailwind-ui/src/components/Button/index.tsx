import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import { type ButtonStylesProps, getButtonStyles } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylesProps;

export function Button({ className, size, colorScheme, ...rest }: ButtonProps) {
  const styles = getButtonStyles({ size, colorScheme });

  return (
    <button
      type="button"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
