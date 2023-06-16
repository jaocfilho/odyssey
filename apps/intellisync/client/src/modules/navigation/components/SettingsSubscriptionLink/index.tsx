import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type SettingsSubscriptionLinkProps = {
  children: ReactNode;
};

export function SettingsSubscriptionLink({
  children,
}: SettingsSubscriptionLinkProps) {
  const url = urlPaths.settings.subscription();

  return <Link href={url}>{children}</Link>;
}
