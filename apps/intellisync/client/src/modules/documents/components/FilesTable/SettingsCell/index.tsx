import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { Menu, MenuItem } from 'tailwind-ui';

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
        <MenuItem>Delete</MenuItem>
      </div>
    </Menu>
  );
}
