'use client';

import { Menu } from '@headlessui/react';

import { Button } from './Button';
import { Transition } from './Transition';
import { MenuItem } from './MenuItem';
import { useSignOut } from '@/modules/auth/hooks/use-signout';

export function SettingsButton() {
  const { clientSignOut } = useSignOut();
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Button />
      </div>
      <Transition>
        <Menu.Items className="absolute w-56 rounded-md bottom-full bg-zinc-900">
          <div className="py-1">
            <MenuItem name="Theme" />
          </div>
          <div className="py-1">
            <MenuItem name="Log out" onClick={clientSignOut} />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
