import { type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <main>
      <div className="mx-auto max-w-7xl pr-4 sm:pr-6 lg:pr-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {children}
        </div>
      </div>
    </main>
  );
}
