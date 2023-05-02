import { ReactNode } from 'react';

import Link from 'next/link';

import { modelsUrls } from '@/modules/navigation/helpers';

type ModelDetailsOverviewLinkProps = {
  children: ReactNode;
  id: string;
};

export function ModelDetailsOverviewLink({
  children,
  id,
}: ModelDetailsOverviewLinkProps) {
  const url = modelsUrls.details.overview(id);

  return <Link href={url}>{children}</Link>;
}
