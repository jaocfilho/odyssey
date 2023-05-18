import { type ReactNode } from 'react';

import { Sidebar } from '@/components/Sidebar';

type BaseLayoutProps = {
  children: ReactNode;
};

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col lg:pl-14">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
