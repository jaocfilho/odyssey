import { type ReactNode } from 'react';

type SectionListComponentProps = {
  children: ReactNode;
};

export function SectionListComponent({ children }: SectionListComponentProps) {
  return (
    <div className="divide-y divide-grayScheme-200 dark:divide-grayScheme-50/10">
      {children}
    </div>
  );
}
