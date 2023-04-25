import React, { Fragment } from 'react';

import { Transition as HuiTransition } from '@headlessui/react';

type TransitionProps = {
  children: React.ReactNode;
};

export function Transition({ children }: TransitionProps) {
  return (
    <HuiTransition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </HuiTransition>
  );
}
