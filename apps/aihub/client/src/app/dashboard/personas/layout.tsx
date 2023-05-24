import { ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';
import { PersonasSidebar } from '@/modules/personas/components/PersonasSidebar';

type PersonasLayoutProps = {
  children: ReactNode;
};

export default function PersonasLayout({ children }: PersonasLayoutProps) {
  return (
    <MultiSidebarLayout
      header="Personas"
      secondarySidebarContent={<PersonasSidebar />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
