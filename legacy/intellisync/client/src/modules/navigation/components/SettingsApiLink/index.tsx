import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type SettingsApiLinkProps = {
  children: ReactNode;
};

export function SettingsApiLink({ children }: SettingsApiLinkProps) {
  const url = urlPaths.settings.api();

  return <Link href={url}>{children}</Link>;
}
