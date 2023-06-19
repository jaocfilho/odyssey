import { type ReactNode } from 'react';

import { Header } from './Header';

type SecondarySidebarProps = {
  children: ReactNode;
  header: string;
};

export function SecondarySidebar({ children, header }: SecondarySidebarProps) {
  return (
    <div
      className="flex flex-col fixed inset-y-0 w-64 border-r dark:border-white/5 dark:bg-black/10"
      aria-label="Secondary sidebar"
      role="secondarysidebar"
    >
      <Header header={header} />
      {children}
    </div>
  );
}
