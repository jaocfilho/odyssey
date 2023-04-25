import { Menu } from '@headlessui/react';

import { UserIcon } from '@heroicons/react/24/outline';

import { classNames } from '@/modules/theme/utils';

const darkStyles =
  'dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white';
const commonStyles =
  'inline-flex w-full gap-x-1.5 text-sm font-medium justify-center rounded-md px-3 py-2';

export function Button() {
  return (
    <Menu.Button className={classNames(commonStyles, darkStyles)}>
      <UserIcon className="h-5 w-5" aria-hidden="true" />
      Settings
    </Menu.Button>
  );
}
