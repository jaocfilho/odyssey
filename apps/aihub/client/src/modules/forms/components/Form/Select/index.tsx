'use client';

import { Controller, useFormContext } from 'react-hook-form';

import {
  Select as TuiSelect,
  SelectProps as TuiSelectProps,
} from 'tailwind-ui';

export type SelectProps = Omit<TuiSelectProps, 'onChange'> & {
  name: string;
};

export function Select({ options, name, label, placeholder }: SelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <TuiSelect
          label={label}
          options={options}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    />
  );
}
