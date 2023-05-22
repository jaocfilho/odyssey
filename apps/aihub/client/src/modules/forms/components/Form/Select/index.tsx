'use client';

import { Controller, useFormContext } from 'react-hook-form';

import {
  Select as TuiSelect,
  SelectProps as TuiSelectProps,
  SelectItem as TuiSelectItem,
} from 'tailwind-ui';

export type SelectProps<T> = Omit<TuiSelectProps<T>, 'onChange'> & {
  name: string;
};

export function Select<T extends TuiSelectItem>({
  options,
  name,
  label,
}: SelectProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <TuiSelect label={label} options={options} onChange={onChange} />
      )}
    />
  );
}
