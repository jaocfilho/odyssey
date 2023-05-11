import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import {
  type ColorSchemeVariants,
  type SizeVariants,
  buttonCommonStyles,
  sizeVariantsStyles,
  colorSchemeVariantsStyles,
} from './styles';

type GetStylesParams = {
  size: SizeVariants;
  colorScheme: ColorSchemeVariants;
};

function getStyles({ size, colorScheme }: GetStylesParams) {
  const sizeStyles = sizeVariantsStyles[size];
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(buttonCommonStyles, sizeStyles, colorSchemeStyles);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SizeVariants;
  colorScheme?: ColorSchemeVariants;
};

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
