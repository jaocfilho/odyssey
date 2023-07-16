'use client';

import { Listbox } from '@headlessui/react';

import { type SelectItem } from './SelectOption';
import { SelectButton, type SelectButtonStylesProps } from './SelectButton';
import { SelectOptions } from './SelectOptions';
import { SelectLabel } from './SelectLabel';

export type SelectProps = SelectButtonStylesProps & {
  options: SelectItem[];
  onChange: (option: any) => void;
  value: any;
  label?: string;
  placeholder?: string;
};

export function Select({
  value,
  options,
  label,
  placeholder,
  onChange,
  colorScheme,
  grayScheme,
}: SelectProps) {
  const selected = options.find((option) => option.value === value);

  const handleChange = (option: SelectItem) => {
    if (option.value === selected?.value) return;
    onChange(option.value);
  };

  const hasLabel = !!label;

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          {hasLabel ? <SelectLabel>{label}</SelectLabel> : null}
          <div className="relative">
            <SelectButton
              selectedItem={selected}
              placeholder={placeholder}
              grayScheme={grayScheme}
              colorScheme={colorScheme}
            />
            <SelectOptions open={open} options={options} />
          </div>
        </>
      )}
    </Listbox>
  );
}
