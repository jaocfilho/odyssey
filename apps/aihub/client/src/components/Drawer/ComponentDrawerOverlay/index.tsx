import { Fragment } from 'react';

import { Transition } from '@headlessui/react';

export function ComponentDrawerOverlay() {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 dark:bg-zinc-950 dark:bg-opacity-70 transition-opacity" />
    </Transition.Child>
  );
}
