import { queryClient } from '@/lib/react-query/client';
import { modelsQueryKeys } from '../query-keys';

export function invalidateAllModelsQuery() {
  const queryKey = modelsQueryKeys.base;

  queryClient.invalidateQueries({ queryKey });
}
