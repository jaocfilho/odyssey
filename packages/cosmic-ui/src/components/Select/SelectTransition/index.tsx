import { Fragment, ReactNode } from 'react';

import { Transition } from '@headlessui/react';

type SelectTransitionProps = {
  children: ReactNode;
  open: boolean;
};

export function SelectTransition({ children, open }: SelectTransitionProps) {
  return (
    <Transition
      show={open}
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
