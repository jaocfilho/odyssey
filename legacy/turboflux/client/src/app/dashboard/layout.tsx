import type { ReactNode } from 'react';

import AuthenticatedLayout from '../AuthenticatedLayout';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
