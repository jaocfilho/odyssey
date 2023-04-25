'use client';

import { Menu } from '@headlessui/react';

import { Button } from './Button';
import { Transition } from './Transition';
import { MenuItem } from './MenuItem';

export function SettingsButton() {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Button />
      </div>
      <Transition>
        <Menu.Items className="absolute w-56 rounded-md bottom-full">
          <div className="py-1">
            <MenuItem name="Edit" />
          </div>
          <div className="py-1">
            <MenuItem name="Archive" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
