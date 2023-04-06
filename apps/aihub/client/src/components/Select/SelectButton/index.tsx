import { Listbox } from '@headlessui/react';

import { UpDownIcon } from '../UpDownIcon';

export function SelectButton() {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700">
      {({ value }) => (
        <>
          <span className="block truncate">{value.label}</span>
          <UpDownIcon />
        </>
      )}
    </Listbox.Button>
  );
}
