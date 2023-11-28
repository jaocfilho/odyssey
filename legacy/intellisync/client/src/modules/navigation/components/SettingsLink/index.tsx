import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type SettingsLinkProps = {
  children: ReactNode;
};

export function SettingsLink({ children }: SettingsLinkProps) {
  const url = urlPaths.settings.base;

  return <Link href={url}>{children}</Link>;
}
