import {
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ForwardedRef,
  forwardRef,
} from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { getStyles, type InputStylesProps } from './styles';
import { classNames } from '../../utils';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className, ...rest }: LabelProps) {
  const styles =
    'block text-sm font-medium leading-6 text-grayScheme-900 dark:text-white';

  return <label className={classNames(styles, className ?? '')} {...rest} />;
}

function ErrorIcon() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      data-testid="error-icon"
    >
      <ExclamationCircleIcon
        className="h-5 w-5 text-red-500"
        aria-hidden="true"
      />
    </div>
  );
}

type ErrorMessageProps = {
  message: string;
  error?: boolean;
};

function HelperText({ message, error }: ErrorMessageProps) {
  const styles = 'mt-2 text-sm';

  const commontStyles = 'text-grayScheme-500 dark:text-grayScheme-400';
  const errorStyles = 'text-red-600 dark:text-red-500';

  classNames(styles, error ? errorStyles : commontStyles);

  return (
    <p className={classNames(styles, error ? errorStyles : commontStyles)}>
      {message}
    </p>
  );
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStylesProps & {
    label?: string;
    error?: boolean;
    helperText?: string;
  };

function BaseInput(
  {
    className,
    colorScheme = 'emerald',
    label,
    name,
    error,
    helperText,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const styles = getStyles({ colorScheme: error ? 'error' : colorScheme });

  const hasLabel = !!label;
  const hasHelperText = !!helperText;

  return (
    <div>
      {hasLabel ? <Label htmlFor={name}>{label}</Label> : null}
      <div className={classNames('relative', hasLabel ? 'mt-1' : '')}>
        <input
          type="text"
          className={classNames(styles, className ?? '')}
          id={name}
          {...rest}
          name={name}
          ref={ref}
        />
        {error ? <ErrorIcon /> : null}
      </div>
      {hasHelperText ? <HelperText message={helperText} error={error} /> : null}
    </div>
  );
}

export const Input = forwardRef(BaseInput);
