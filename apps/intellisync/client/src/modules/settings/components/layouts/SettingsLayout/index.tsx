import { type ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';
import { SettingsSidebar } from '../SettingsSidebar';

type SettingsLayoutProps = {
  children: ReactNode;
};

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <MultiSidebarLayout
      header="Settings"
      secondarySidebarContent={<SettingsSidebar />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
