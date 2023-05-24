import { ReactNode } from 'react';

import { BaseLayout } from '@/components/PageLayouts/BaseLayout';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
