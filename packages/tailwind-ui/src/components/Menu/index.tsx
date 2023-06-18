import { type ReactNode } from 'react';

import { Menu as HuiMenu } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { classNames } from '../../utils';
import { Transition } from './Transition';
import { MenuButton, type MenuButtonProps } from './MenuButton';

type DropdownProps = {
  placement?: 'left' | 'right';
  button: ReactNode;
  header?: ReactNode;
  buttonProps?: MenuButtonProps;
};

export function Menu({
  placement,
  header,
  button,
  buttonProps,
}: DropdownProps) {
  return (
    <HuiMenu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton {...buttonProps}>{button}</MenuButton>
      </div>

      <Transition>
        <HuiMenu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {header}
          <div className="py-1">
            <HuiMenu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </HuiMenu.Item>
            <HuiMenu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </HuiMenu.Item>
            <HuiMenu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </HuiMenu.Item>
          </div>
          <div className="py-1">
            <form method="POST" action="#">
              <HuiMenu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </HuiMenu.Item>
            </form>
          </div>
        </HuiMenu.Items>
      </Transition>
    </HuiMenu>
  );
}
