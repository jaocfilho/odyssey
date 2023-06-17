import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { BaseLayout } from '@/components/PageLayouts/BaseLayout';
import { serverGetSession } from '@/modules/auth/helpers/server';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { session } = await serverGetSession();

  if (!session) {
    redirect('/login');
  }

  return <BaseLayout>{children}</BaseLayout>;
}
