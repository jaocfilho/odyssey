import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { Menu } from 'tailwind-ui';
import { DeleteItem } from './DeleteItem';

type SettingsCellProps = {};

export function SettingsCell({}: SettingsCellProps) {
  return (
    <Menu
      colorScheme="gray"
      button={
        <EllipsisVerticalIcon
          className="h-5 w-5 dark:text-indigo-400 dark:hover:text-indigo-300"
          aria-hidden="true"
        />
      }
    >
      <div className="py-1">
        <DeleteItem />
      </div>
    </Menu>
  );
}
