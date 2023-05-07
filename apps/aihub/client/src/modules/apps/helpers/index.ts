import { queryClient } from '@/lib/react-query/client';
import { appsQueryKeys } from '../query-keys';

export function invalidateAllAppsQuery() {
  const queryKey = appsQueryKeys.base;

  queryClient.invalidateQueries({ queryKey });
}
