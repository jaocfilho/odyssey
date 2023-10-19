import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { Menu } from 'cosmic-ui';
import { DeleteItem } from './DeleteItem';

type SettingsCellProps = {
  fileId: string;
};

export function SettingsCell({ fileId }: SettingsCellProps) {
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
        <DeleteItem fileId={fileId} />
      </div>
    </Menu>
  );
}
