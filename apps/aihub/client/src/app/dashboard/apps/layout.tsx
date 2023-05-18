import { ReactNode } from 'react';

import { AppsSidebar } from '@/modules/apps/components/AppsSidebar';
import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <MultiSidebarLayout header="Apps" secondarySidebarContent={<AppsSidebar />}>
      {children}
    </MultiSidebarLayout>
  );
}
