'use client';

import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from 'react-hook-form';

import {
  Select as TuiSelect,
  SelectProps as TuiSelectProps,
} from 'tailwind-ui';

type BaseSelectProps = Omit<TuiSelectProps, 'onChange'> & {
  name: string;
  control: Control<FieldValues, any>;
};

export function BaseSelect({
  options,
  name,
  control,
  label,
  placeholder,
}: BaseSelectProps) {
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

export type SelectProps = Omit<BaseSelectProps, 'control'>;

export function Select({ options, name, label, placeholder }: SelectProps) {
  const { control } = useFormContext();

  return (
    <BaseSelect
      name={name}
      options={options}
      control={control}
      label={label}
      placeholder={placeholder}
    />
  );
}
