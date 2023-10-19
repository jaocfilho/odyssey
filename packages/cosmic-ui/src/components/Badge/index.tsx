import { type HTMLAttributes } from 'react';

import { BadgeStylesProps, getStyles } from './styles';
import { classNames } from '../../utils';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & BadgeStylesProps;

export function Badge({
  className,
  variant = 'solid',
  colorScheme = 'pink',
  ...rest
}: BadgeProps) {
  const styles = getStyles({ variant, colorScheme });

  return <span className={classNames(styles, className ?? '')} {...rest} />;
}
