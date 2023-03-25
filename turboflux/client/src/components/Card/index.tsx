import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-zinc-900 dark:text-white">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};
