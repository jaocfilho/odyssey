import { ReactNode } from 'react';

import { AppsSidebar } from '@/modules/apps/components/AppsSidebar';
import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';

type PersonasLayoutProps = {
  children: ReactNode;
};

export default function PersonasLayout({ children }: PersonasLayoutProps) {
  return (
    <MultiSidebarLayout
      header="Personas"
      secondarySidebarContent={<AppsSidebar />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
