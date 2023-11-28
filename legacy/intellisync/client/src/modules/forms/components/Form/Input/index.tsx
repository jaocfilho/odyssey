'use client';

import { useFormContext } from 'react-hook-form';

import { Input as TuiInput, type InputProps as TuiInputProps } from 'cosmic-ui';

export type InputProps = TuiInputProps & {
  name: string;
};

export function Input(props: InputProps) {
  const { register, getFieldState } = useFormContext();
  const { error } = getFieldState(props.name);

  const helperText = error?.message?.toString();

  return (
    <div className="relative">
      <TuiInput
        id={props.name}
        colorScheme="indigo"
        {...register(props.name)}
        {...props}
        error={!!error}
        helperText={helperText}
      />
    </div>
  );
}
