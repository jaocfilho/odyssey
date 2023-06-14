import {
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ForwardedRef,
  forwardRef,
} from 'react';

import {
  ExclamationCircleIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/20/solid';

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

function CopyIcon() {
  return (
    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
      <div
        className="cursor-pointer inline-flex items-center space-x-1 rounded border border-grayScheme-200 dark:border-grayScheme-600 px-2 font-sans text-xs text-grayScheme-600 dark:text-grayScheme-200 dark:hover:border-grayScheme-500"
        data-testid="copy-icon"
      >
        <ClipboardDocumentIcon
          className="h-5 w-5 text-grayScheme-400 dark:text-grayScheme-600"
          aria-hidden="true"
        />
        <p>copy</p>
      </div>
    </div>
  );
}

type HelperTextProps = {
  message: string;
  error?: boolean;
};

function HelperText({ message, error }: HelperTextProps) {
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
    hasCopyButton?: boolean;
  };

function BaseInput(
  {
    className,
    colorScheme = 'emerald',
    label,
    name,
    error,
    helperText,
    hasCopyButton,
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
        {hasCopyButton ? <CopyIcon /> : null}
      </div>
      {hasHelperText ? <HelperText message={helperText} error={error} /> : null}
    </div>
  );
}

export const Input = forwardRef(BaseInput);
