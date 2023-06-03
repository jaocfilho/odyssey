import { type ReactNode } from 'react';

import { Topbar } from '@/components/Topbar';

type SimpleLayoutProps = {
  children: ReactNode;
};

export function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <Topbar />
      {children}
    </div>
  );
}
