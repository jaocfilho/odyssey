import { TextareaHTMLAttributes } from 'react';

import { getStyles, type TextareaStylesProps } from './styles';
import { classNames } from '../../utils';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  TextareaStylesProps;

export function Textarea({
  className,
  colorScheme = 'indigo',
  ...rest
}: TextAreaProps) {
  const styles = getStyles({ colorScheme });

  return <textarea className={classNames(styles, className ?? '')} {...rest} />;
}
