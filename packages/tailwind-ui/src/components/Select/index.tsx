'use client';

import { Listbox } from '@headlessui/react';

import { type SelectItem } from './SelectOption';
import { SelectButton } from './SelectButton';
import { useSelected } from './use-selected';
import { SelectOptions } from './SelectOptions';

export type SelectProps = {
  options: SelectItem[];
  label: string;
  placeholder?: string;
  onChange?: (option: SelectItem) => void;
};

export function Select({ options, label, placeholder, onChange }: SelectProps) {
  const { selected, handleChange } = useSelected({ onChange });

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6">
            {label}
          </Listbox.Label>
          <div className="relative mt-2">
            <SelectButton selectedItem={selected} placeholder={placeholder} />

            <SelectOptions open={open} options={options} />
          </div>
        </>
      )}
    </Listbox>
  );
}
