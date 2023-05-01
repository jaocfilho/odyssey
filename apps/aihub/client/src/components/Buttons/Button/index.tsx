import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '@/modules/theme/utils';

const commonStyles =
  'rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
const darkStyles =
  'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:outline-emerald-500';

const styles = classNames(commonStyles, darkStyles);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles, className ?? '')}
      {...rest}
    />
  );
}
