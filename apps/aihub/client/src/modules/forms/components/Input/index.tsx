'use client';

import { InputHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { ErrorIcon } from '../ErrorIcon';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <input
        id={props.name}
        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
        {...register(props.name)}
        {...props}
      />
      <ErrorIcon name={props.name} />
    </div>
  );
}
