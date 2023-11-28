import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type SettingsUsageLinkProps = {
  children: ReactNode;
};

export function SettingsUsageLink({ children }: SettingsUsageLinkProps) {
  const url = urlPaths.settings.usage();

  return <Link href={url}>{children}</Link>;
}
