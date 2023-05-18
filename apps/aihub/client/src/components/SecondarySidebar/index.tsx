import { type ReactNode } from 'react';

import { Header } from './Header';

type SecondarySidebarProps = {
  children: ReactNode;
  header: string;
};

export function SecondarySidebar({ children, header }: SecondarySidebarProps) {
  return (
    <div className="flex flex-col fixed inset-y-0 w-64 border-r dark:border-zinc-50/10 dark:bg-zinc-950">
      <Header header={header} />
      {children}
    </div>
  );
}
