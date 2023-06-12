import {
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ForwardedRef,
  forwardRef,
} from 'react';

import { getStyles, type InputStylesProps } from './styles';
import { classNames } from '../../utils';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className, ...rest }: LabelProps) {
  const styles =
    'block text-sm font-medium leading-6 text-grayScheme-900 dark:text-white';

  return <label className={classNames(styles, className ?? '')} {...rest} />;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStylesProps & {
    label?: string;
  };

function BaseInput(
  { className, colorScheme = 'emerald', label, name, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const styles = getStyles({ colorScheme });

  return (
    <div>
      {!!label ? <Label htmlFor={name}>{label}</Label> : null}
      <div className={!!label ? 'mt-2' : undefined}>
        <input
          type="text"
          className={classNames(styles, className ?? '')}
          id={name}
          {...rest}
          name={name}
          ref={ref}
        />
      </div>
    </div>
  );
}

export const Input = forwardRef(BaseInput);
