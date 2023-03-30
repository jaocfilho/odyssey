import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <form action="#" className="relative">
      <div
        className="
      overflow-hidden rounded border shadow-sm focus-within:ring-1
      
      dark:border-zinc-700 dark:focus-within:border-pink-600  dark:focus-within:ring-pink-600"
      >
        {children}
      </div>
    </form>
  );
};
