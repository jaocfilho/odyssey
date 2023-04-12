'use client';

import { TextareaHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      id={props.name}
      className="block w-full rounded-md border-0 shadow-sm ring-1 bg-white text-zinc-500 ring-zinc-900/10 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-emerald-600 transition sm:py-1.5 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:bg-zinc-800 dark:[&:not(:focus)]:ring-white/20 dark:placeholder:text-zinc-500 dark:focus:ring-emerald-500"
      {...register(props.name)}
      {...props}
    />
  );
}
