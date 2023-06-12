'use client';

import { useFieldError } from '@/modules/forms/hooks/use-field-error';

import { useFormContext } from 'react-hook-form';

import {
  Input as TuiInput,
  type InputProps as TuiInputProps,
} from 'tailwind-ui';

export type InputProps = TuiInputProps & {
  name: string;
};

export function Input(props: InputProps) {
  const { register } = useFormContext();
  const { error } = useFieldError({ name: props.name });

  const helperText = error?.message?.toString();

  return (
    <div className="relative">
      <TuiInput
        id={props.name}
        colorScheme="emerald"
        {...register(props.name)}
        {...props}
        error={!!error}
        helperText={helperText}
      />
    </div>
  );
}
