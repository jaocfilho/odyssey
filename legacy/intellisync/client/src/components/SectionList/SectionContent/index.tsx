import { type ReactNode } from 'react';

type SectionContentProps = {
  children: ReactNode;
};

export function SectionContent({ children }: SectionContentProps) {
  return <div className="md:col-span-2">{children}</div>;
}
