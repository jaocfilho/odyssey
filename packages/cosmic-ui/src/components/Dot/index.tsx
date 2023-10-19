import { type HtmlHTMLAttributes } from 'react';
import { classNames } from '../../utils';
import { DotStylesProps, getStyles } from './styles';

type DotProps = HtmlHTMLAttributes<HTMLDivElement> & DotStylesProps;

export function Dot({ className, colorScheme = 'green', ...rest }: DotProps) {
  const styles = getStyles({ colorScheme });

  return (
    <div className={classNames(styles, className ?? '')} {...rest}>
      <div className="h-2 w-2 rounded-full bg-current" />
    </div>
  );
}
