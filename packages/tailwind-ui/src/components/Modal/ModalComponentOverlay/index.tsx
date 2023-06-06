import { Fragment } from 'react';

import { Transition } from '@headlessui/react';

export function ModalComponentOverlay() {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-grayScheme-950 dark:bg-opacity-70 transition-opacity" />
    </Transition.Child>
  );
}
