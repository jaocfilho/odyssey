'use client';

import { useSelectAllApps } from '@/modules/apps/hooks/use-select-all-apps';
import { AppsList } from '../AppsList';

export function AppsListWithData() {
  const appsQuery = useSelectAllApps();

  return <AppsList apps={appsQuery.data!} />;
}
