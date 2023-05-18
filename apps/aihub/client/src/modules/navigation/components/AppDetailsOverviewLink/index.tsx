import { ReactNode } from 'react';

import Link from 'next/link';

import { appsUrls } from '@/modules/navigation/urls';

type AppDetailsOverviewLinkProps = {
  children: ReactNode;
  id: string;
};

export function AppDetailsOverviewLink({
  children,
  id,
}: AppDetailsOverviewLinkProps) {
  const url = appsUrls.details.overview(id);

  return <Link href={url}>{children}</Link>;
}
