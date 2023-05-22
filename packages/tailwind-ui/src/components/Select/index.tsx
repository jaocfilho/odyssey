'use client';

import { useState } from 'react';

import { Listbox } from '@headlessui/react';

import { SelectOption } from './SelectOption';
import { SelectTransition } from './SelectTransition';
import { SelectButton } from './SelectButton';

export type SelectItem = {
  value: any;
  label: string | number;
};

export type SelectProps = {
  options: SelectItem[];
  label: string;
  placeholder?: string;
  onChange?: (option: SelectItem) => void;
};

export function Select({ options, label, placeholder, onChange }: SelectProps) {
  const [selected, setSelected] = useState<SelectItem>();

  const handleChange = (option: SelectItem) => {
    setSelected(option);
    if (typeof onChange === 'function') {
      onChange(option);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6">
            {label}
          </Listbox.Label>
          <div className="relative mt-2">
            <SelectButton selectedItem={selected} placeholder={placeholder} />

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
