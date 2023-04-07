'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Listbox } from '@headlessui/react';

import { SelectButton } from '@/components/Select/SelectButton';
import { SelectOption } from '@/components/Select/SelectOption';
import { SelectTransition } from '@/components/Select/SelectTransition';
import { useState } from 'react';

type SelectItem = {
  value: any;
  label: string | number;
};

type SelectProps<T> = {
  options: T[];
  name: string;
  label: string;
};

export function Select<T extends SelectItem>({
  options,
  name,
  label,
}: SelectProps<T>) {
  const [selected, setSelected] = useState(options[0]);

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Listbox
          value={selected}
          onChange={(option) => {
            setSelected(option);
            onChange(option);
          }}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium leading-6">
                {label}
              </Listbox.Label>
              <div className="relative">
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
      )}
    />
  );
}
