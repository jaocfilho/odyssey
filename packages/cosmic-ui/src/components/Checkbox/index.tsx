import { type InputHTMLAttributes } from 'react';

import { classNames } from '../../utils';
import {
  type CheckboxStylesProps,
  checkboxCommonStyles,
  colorSchemeVariantsStyles,
} from './styles';

function getStyles({ colorScheme }: Required<CheckboxStylesProps>) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(checkboxCommonStyles, colorSchemeStyles);
}

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  CheckboxStylesProps;

export function Checkbox({
  className,
  colorScheme = 'emerald',
  ...rest
}: CheckboxProps) {
  const styles = getStyles({ colorScheme });

  return (
    <input
      type="checkbox"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
