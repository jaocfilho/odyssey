import { Menu } from '@headlessui/react';

import { classNames } from 'tailwind-ui';

const commonStyles = 'block px-4 py-2 text-sm cursor-pointer';
const activeStyles = 'dark:text-zinc-200 dark:bg-zinc-800';
const inactiveStyles = 'text-zinc-400';

type MenuItemProps = {
  name: string;
  onClick?: () => void;
};

export function MenuItem({ name, onClick }: MenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <span
          onClick={onClick}
          className={classNames(
            active ? activeStyles : inactiveStyles,
            commonStyles
          )}
        >
          {name}
        </span>
      )}
    </Menu.Item>
  );
}
