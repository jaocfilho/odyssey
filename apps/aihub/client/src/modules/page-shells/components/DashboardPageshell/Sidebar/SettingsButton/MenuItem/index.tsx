import { Menu } from '@headlessui/react';

import { classNames } from '@/modules/theme/utils';

type MenuItemProps = {
  name: string;
};

export function MenuItem({ name }: MenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'block px-4 py-2 text-sm'
          )}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  );
}
