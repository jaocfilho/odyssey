import { type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <nav className="flex overflow-x-auto border-b dark:border-white/5 py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 dark:text-grayScheme-400 sm:px-6 lg:px-8"
      >
        {children}
      </ul>
    </nav>
  );
}
