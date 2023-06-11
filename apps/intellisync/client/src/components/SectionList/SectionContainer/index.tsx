import { type ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
};

export function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      {children}
    </div>
  );
}
