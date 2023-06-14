import { type ReactNode } from 'react';

import { classNames } from 'tailwind-ui';

const commonStyles =
  'group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold cursor-pointer leading-6';
const currentStyles =
  'bg-grayScheme-50 dark:bg-grayScheme-900 text-emerald-600 dark:text-white';
const notCurrentStyles =
  'dark:text-grayScheme-400 dark:hover:text-white dark:hover:bg-grayScheme-900';

type SecondarySidebarItemProps = {
  children: ReactNode;
  current?: boolean;
};

export function SecondarySidebarItem({
  children,
  current = false,
}: SecondarySidebarItemProps) {
  return (
    <div>
      <p
        className={classNames(
          current ? currentStyles : notCurrentStyles,
          commonStyles
        )}
      >
        {children}
      </p>
    </div>
  );
}
