'use client';

import { useAllAppsQuery } from '@/modules/apps/hooks/use-all-apps-query';
import { AppsList } from '../AppsList';

export function AppsListWithData() {
  const appsQuery = useAllAppsQuery();

  return <AppsList apps={appsQuery.data!} />;
}
