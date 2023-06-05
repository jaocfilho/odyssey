import { ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
};

export function SectionContent({ children }: SectionContainerProps) {
  return <div className="md:col-span-2">{children}</div>;
}
