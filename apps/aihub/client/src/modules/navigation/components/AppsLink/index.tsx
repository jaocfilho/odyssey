import { ReactNode } from 'react';

import Link from 'next/link';

import { appsUrls } from '@/modules/navigation/helpers';

type AppsLinkProps = {
  children: ReactNode;
};

export function AppsLink({ children }: AppsLinkProps) {
  const url = appsUrls.base;

  return <Link href={url}>{children}</Link>;
}
