import { type ReactNode } from 'react';

type SectionListComponentProps = {
  children: ReactNode;
};

export function SectionListComponent({ children }: SectionListComponentProps) {
  return <div className="divide-y dark:divide-zinc-50/10">{children}</div>;
}
