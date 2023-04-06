'use client';

import { Listbox } from '@headlessui/react';

import { SelectOption } from './SelectOption';
import { SelectTransition } from './SelectTransition';
import { SelectButton } from './SelectButton';

type SelectItem = {
  value: any;
  label: string | number;
};

type SelectProps<T> = {
  options: T[];
  label: string;
};

export function Select<T extends SelectItem>({
  options,
  label,
}: SelectProps<T>) {
  return (
    <Listbox defaultValue={options[0]}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6">
            {label}
          </Listbox.Label>
          <div className="relative mt-2">
            <SelectButton />

            <SelectTransition open={open}>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-800">
                {options.map((option) => (
                  <SelectOption key={option.value} value={option}>
                    {option.label}
                  </SelectOption>
                ))}
              </Listbox.Options>
            </SelectTransition>
          </div>
        </>
      )}
    </Listbox>
  );
}
