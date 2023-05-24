import { type ReactNode } from 'react';

import { SecondarySidebar } from '@/components/SecondarySidebar';
import { Topbar } from '@/components/Topbar';

type MultiSidebarLayoutProps = {
  children: ReactNode;
  header: string;
  secondarySidebarContent: ReactNode;
};

export function MultiSidebarLayout({
  children,
  header,
  secondarySidebarContent,
}: MultiSidebarLayoutProps) {
  return (
    <div>
      <div className="flex relative h-full">
        <SecondarySidebar header={header}>
          {secondarySidebarContent}
        </SecondarySidebar>
        <div className="flex flex-col h-full w-full pl-64">
          <Topbar />
          {children}
        </div>
      </div>
    </div>
  );
}
