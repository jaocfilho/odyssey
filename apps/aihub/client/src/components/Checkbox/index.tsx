import { type InputHTMLAttributes } from 'react';

import { classNames } from '@/modules/theme/utils';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const commonStyles = 'cursor-pointer bg-inherit h-4 w-4 rounded';
const darkStyles =
  'dark:border-zinc-500 dark:hover:border-emerald-500 dark:text-emerald-600 dark:focus:ring-emerald-600';

const styles = classNames(commonStyles, darkStyles);

export function Checkbox({ className, ...rest }: CheckboxProps) {
  classNames;
  return (
    <input
      type="checkbox"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
