import { type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <nav className="flex overflow-x-auto border-b dark:border-zinc-200/10 py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 dark:text-zinc-500 sm:px-6 lg:px-8"
      >
        {children}
      </ul>
    </nav>
  );
}
