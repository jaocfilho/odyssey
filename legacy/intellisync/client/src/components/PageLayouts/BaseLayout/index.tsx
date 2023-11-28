import { type ReactNode } from 'react';

import { Sidebar } from '@/components/Sidebar';

type BaseLayoutProps = {
  children: ReactNode;
};

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="flex flex-col h-full w-full lg:pl-14">
        <main className="flex-1 h-full">{children}</main>
      </div>
    </div>
  );
}
