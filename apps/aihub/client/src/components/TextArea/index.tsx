import { TextareaHTMLAttributes } from 'react';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:py-1.5 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
      {...props}
    />
  );
};
