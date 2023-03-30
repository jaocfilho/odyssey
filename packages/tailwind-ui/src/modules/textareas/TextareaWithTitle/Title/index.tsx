import { InputHTMLAttributes } from 'react';

export type TitleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'type'
> & {
  label?: string;
};

export const Title = ({ label, ...rest }: TitleProps) => {
  return (
    <>
      <label htmlFor={rest?.id} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        className="
        block w-full border-0 focus:ring-0 pt-2.5 text-lg font-medium
        
        dark:placeholder:text-zinc-400 dark:bg-zinc-900 dark:text-zinc-400"
        {...rest}
      />
    </>
  );
};
