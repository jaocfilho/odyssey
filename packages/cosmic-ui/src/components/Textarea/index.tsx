import {
  type TextareaHTMLAttributes,
  type ForwardedRef,
  forwardRef,
} from 'react';

import { getStyles, type TextareaStylesProps } from './styles';
import { classNames } from '../../utils';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  TextareaStylesProps;

function BaseTextarea(
  { className, colorScheme = 'emerald', ...rest }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const styles = getStyles({ colorScheme });

  return (
    <textarea
      className={classNames(styles, className ?? '')}
      {...rest}
      ref={ref}
    />
  );
}

export const Textarea = forwardRef(BaseTextarea);
