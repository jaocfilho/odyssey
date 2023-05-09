'use client';

import { useIsCurrentApp } from '@/modules/apps/hooks/use-is-current-app';
import { AppDetailsOverviewLink } from '@/modules/navigation/components/AppDetailsOverviewLink';
import { classNames } from '@/modules/theme/utils';

const commonStyles =
  'group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold';
const currentStyles = 'dark:bg-zinc-900 dark:text-emerald-500';
const notCurrentStyles =
  'dark:text-zinc-600 dark:hover:text-emerald-500 dark:hover:bg-zinc-900';

type ItemProps = {
  name: string;
  id: string;
};

export function Item({ name, id }: ItemProps) {
  const current = useIsCurrentApp(id);

  return (
    <li>
      <AppDetailsOverviewLink id={id}>
        <p
          className={classNames(
            current ? currentStyles : notCurrentStyles,
            commonStyles
          )}
        >
          {name}
        </p>
      </AppDetailsOverviewLink>
    </li>
  );
}
