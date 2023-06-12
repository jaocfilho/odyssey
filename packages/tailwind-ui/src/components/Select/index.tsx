'use client';

import { Listbox } from '@headlessui/react';

import { type SelectItem } from './SelectOption';
import { SelectButton } from './SelectButton';
import { SelectOptions } from './SelectOptions';

export type SelectProps = {
  value?: any;
  options: SelectItem[];
  label: string;
  onChange: (option: any) => void;
  placeholder?: string;
};

export function Select({
  value,
  options,
  label,
  placeholder,
  onChange,
}: SelectProps) {
  const selected = options.find((option) => option.value === value);

  const handleChange = (option: SelectItem) => {
    if (option.value === selected?.value) return;
    onChange(option.value);
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

            <SelectOptions open={open} options={options} />
          </div>
        </>
      )}
    </Listbox>
  );
}
