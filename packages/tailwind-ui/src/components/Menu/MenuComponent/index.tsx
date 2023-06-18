'use client';

import { type ReactNode } from 'react';

import { Menu as HuiMenu } from '@headlessui/react';

import { Transition } from '../Transition';
import { MenuButton, type MenuButtonProps } from '../MenuButton';

type DropdownProps = Pick<MenuButtonProps, 'colorScheme'> & {
  button: ReactNode;
  children: ReactNode;
  header?: ReactNode;
  buttonProps?: MenuButtonProps;
};

export function Menu({
  children,
  colorScheme,
  header,
  button,
  buttonProps,
}: DropdownProps) {
  return (
    <HuiMenu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton colorScheme={colorScheme} {...buttonProps}>
          {button}
        </MenuButton>
      </div>

      <Transition>
        <HuiMenu.Items className="absolute right-0 z-100 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-grayScheme-50/10 dark:bg-grayScheme-900 rounded-md bg-white shadow-lg ring-1 ring-black dark:ring-grayScheme-50/10 ring-opacity-5 focus:outline-none">
          {header}
          {children}
        </HuiMenu.Items>
      </Transition>
    </HuiMenu>
  );
}
