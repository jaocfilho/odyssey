import { ReactNode } from 'react';

import { DashboardPageshell } from '@/modules/page-shells';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <DashboardPageshell>{children}</DashboardPageshell>;
}
