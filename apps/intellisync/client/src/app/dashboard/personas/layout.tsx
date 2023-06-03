import { ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';
import { PersonasSidebar } from '@/modules/personas/components/PersonasSidebar';
import { serverSelectAllPersonas } from '@/modules/personas/api/server';

type PersonasLayoutProps = {
  children: ReactNode;
};

export default async function PersonasLayout({
  children,
}: PersonasLayoutProps) {
  await serverSelectAllPersonas();

  return (
    <MultiSidebarLayout
      header="Personas"
      secondarySidebarContent={<PersonasSidebar />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
