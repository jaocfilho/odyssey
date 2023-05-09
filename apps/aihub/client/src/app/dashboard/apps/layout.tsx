import { ReactNode } from 'react';

import { DashboardPageshell } from '@/modules/page-shells';
import { AppsSidebar } from '@/modules/apps/components/AppsSidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardPageshell>
      <div className="flex relative h-full">
        <div className="flex flex-col fixed inset-y-0 w-64 border-r dark:border-zinc-50/10 dark:bg-zinc-950">
          <div className="flex w-full items-center h-8 p-4 pb-6 mt-2 border-b dark:border-zinc-50/10">
            <p className="text-xl dark:text-zinc-200 leading-6">Apps</p>
          </div>
          <AppsSidebar />
        </div>
        <div className="flex pl-64">{children}</div>
      </div>
    </DashboardPageshell>
  );
}
