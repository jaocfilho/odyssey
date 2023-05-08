import { ReactNode } from 'react';

import Link from 'next/link';

import { appsUrls } from '@/modules/navigation/helpers';

type CreateAppLinkProps = {
  children: ReactNode;
};

export function CreateAppLink({ children }: CreateAppLinkProps) {
  const url = appsUrls.create();

  return <Link href={url}>{children}</Link>;
}
