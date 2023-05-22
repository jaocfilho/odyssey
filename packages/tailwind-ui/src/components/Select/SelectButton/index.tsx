import { Listbox } from '@headlessui/react';

import { UpDownIcon } from '../UpDownIcon';
import { SelectItem } from '..';

type SelectButtonProps = {
  selectedItem?: SelectItem;
  placeholder?: string;
};

export function SelectButton({ selectedItem, placeholder }: SelectButtonProps) {
  const display = selectedItem ? selectedItem.label : placeholder;

  return (
    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white text-zinc-500 transition py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-zinc-400 dark:placeholder:text-zinc-500 dark:focus:ring-emerald-500  dark:ring-white/10 dark:hover:bg-zinc-800 dark:[&:not(:focus)]:ring-white/20 dark:ring-inset">
      <span className="block truncate">{display}</span>
      <UpDownIcon />
    </Listbox.Button>
  );
}
