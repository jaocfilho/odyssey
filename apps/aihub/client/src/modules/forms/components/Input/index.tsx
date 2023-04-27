'use client';

import { InputHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { ErrorIcon } from '../ErrorIcon';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <input
        id={props.name}
        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 bg-white text-zinc-500 ring-zinc-900/10 transition focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:bg-zinc-800 dark:[&:not(:focus)]:ring-white/20 dark:placeholder:text-zinc-500 dark:focus:ring-emerald-500"
        {...register(props.name)}
        {...props}
      />
      <ErrorIcon name={props.name} />
    </div>
  );
}
