'use client';

import { type ReactNode } from 'react';

import {
  Menu as HuiMenu,
  MenuItemProps as HuiMenuItemProps,
} from '@headlessui/react';

import { classNames } from '../../../utils';

type MenuItemProps = HuiMenuItemProps<'button' | 'a'> & {
  children: ReactNode;
};

export function MenuItem({ children, ...rest }: MenuItemProps) {
  return (
    <HuiMenu.Item {...rest}>
      {({ active }) => (
        <button
          type="button"
          className={classNames(
            active
              ? 'bg-grayScheme-100 dark:bg-grayScheme-800 text-grayScheme-900 dark:text-grayScheme-200'
              : 'text-gray-700 dark:text-grayScheme-200',
            'block px-4 py-2 text-sm text-left w-full'
          )}
        >
          {children}
        </button>
      )}
    </HuiMenu.Item>
  );
}
