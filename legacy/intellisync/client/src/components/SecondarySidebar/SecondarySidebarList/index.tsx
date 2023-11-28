import { type ReactNode } from 'react';

type SecondarySidebarListProps = {
  children: ReactNode;
};

export function SecondarySidebarList({ children }: SecondarySidebarListProps) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
