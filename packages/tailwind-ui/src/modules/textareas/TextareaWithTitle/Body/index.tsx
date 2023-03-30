import { TextareaHTMLAttributes } from 'react';

export type BodyProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
> & {
  label?: string;
};

export const Body = ({ label, ...rest }: BodyProps) => {
  return (
    <>
      <label htmlFor={rest?.id} className="sr-only">
        {label}
      </label>
      <textarea
        className="
        block w-full resize-none border-0 py-0 focus:ring-0
        
        dark:text-zinc-400 dark:placeholder:text-zinc-400  dark:bg-zinc-900
        
        sm:text-sm sm:leading-6"
        {...rest}
      />
    </>
  );
};
