import { queryClient } from '@/lib/react-query/client';
import { appsQueryKeys } from '../query-keys';

export function invalidateAllAppsQuery() {
  const queryKey = appsQueryKeys.all();

  queryClient.invalidateQueries({ queryKey });
}

export function isAppsPath(pathname: string) {
  const splitedPathname = pathname.split('/');
  const path = splitedPathname[2];

  return path === 'apps';
}
