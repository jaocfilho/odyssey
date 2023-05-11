import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import {
  type ButtonStylesProps,
  buttonCommonStyles,
  sizeVariantsStyles,
  colorSchemeVariantsStyles,
} from './styles';

function getStyles({ size, colorScheme }: Required<ButtonStylesProps>) {
  const sizeStyles = sizeVariantsStyles[size];
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(buttonCommonStyles, sizeStyles, colorSchemeStyles);
}

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
