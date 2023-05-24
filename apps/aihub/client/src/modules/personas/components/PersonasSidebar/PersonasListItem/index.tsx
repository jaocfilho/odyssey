'use client';

import { PersonaDetailsOverviewLink } from '@/modules/navigation/components/PersonaDetailsOverviewLink';
import { useIsCurrentPersonaPath } from '@/modules/personas/hooks/use-is-current-persona-path';
import { classNames } from 'tailwind-ui';

const commonStyles =
  'group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold';
const currentStyles = 'dark:bg-zinc-900 dark:text-emerald-500';
const notCurrentStyles =
  'dark:text-zinc-600 dark:hover:text-emerald-500 dark:hover:bg-zinc-900';

type PersonasListItemProps = {
  id: string;
  name: string;
};

export function PersonasListItem({ id, name }: PersonasListItemProps) {
  const current = useIsCurrentPersonaPath(id);

  return (
    <li>
      <PersonaDetailsOverviewLink id={id}>
        <p
          className={classNames(
            current ? currentStyles : notCurrentStyles,
            commonStyles
          )}
        >
          {name}
        </p>
      </PersonaDetailsOverviewLink>
    </li>
  );
}
