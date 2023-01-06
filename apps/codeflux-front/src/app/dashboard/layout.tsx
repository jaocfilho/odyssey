import type { ReactNode } from 'react';

import { AuthenticatedPageShell } from '../../modules/pageShells';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <AuthenticatedPageShell>{children}</AuthenticatedPageShell>;
}
