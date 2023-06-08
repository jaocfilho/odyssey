'use client';

import { TextareaHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { Textarea as TuiTextarea } from 'tailwind-ui';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <TuiTextarea
      id={props.name}
      colorScheme="emerald"
      {...register(props.name)}
      {...props}
    />
  );
}
