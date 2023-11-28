import { type ReactNode } from 'react';

import { SettingsLayout as SettingsLayoutComponent } from '@/modules/settings/components/layouts/SettingsLayout';

type SettingsLayoutProps = {
  children: ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <SettingsLayoutComponent>{children}</SettingsLayoutComponent>;
}
