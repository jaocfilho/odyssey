import { type ReactNode } from 'react';

import { Listbox } from '@headlessui/react';

type SelectLabelProps = {
  children: ReactNode;
};

export function SelectLabel({ children }: SelectLabelProps) {
  return (
    <Listbox.Label className="block text-sm font-medium leading-6 mb-2 dark:text-white">
      {children}
    </Listbox.Label>
  );
}
