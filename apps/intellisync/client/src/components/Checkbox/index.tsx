import { type InputHTMLAttributes } from 'react';

import { classNames } from 'tailwind-ui';

const commonStyles = 'cursor-pointer bg-inherit h-4 w-4 rounded';
const darkStyles =
  'dark:border-zinc-500 dark:hover:border-brand-500 dark:text-brand-600 dark:focus:ring-brand-600';

const styles = classNames(commonStyles, darkStyles);

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export function Checkbox({ className, ...rest }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
