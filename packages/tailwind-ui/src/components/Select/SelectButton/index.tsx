import { Listbox } from '@headlessui/react';

import { UpDownIcon } from '../UpDownIcon';

export function SelectButton() {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white text-zinc-500 transition py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-zinc-400 dark:placeholder:text-zinc-500 dark:focus:ring-emerald-500  dark:ring-white/10 dark:hover:bg-zinc-800 dark:[&:not(:focus)]:ring-white/20 dark:ring-inset">
      {({ value }) => (
        <>
          <span className="block truncate">{value.label}</span>
          <UpDownIcon />
        </>
      )}
    </Listbox.Button>
  );
}
