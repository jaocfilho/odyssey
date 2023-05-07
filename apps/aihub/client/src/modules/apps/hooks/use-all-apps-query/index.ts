import { useQuery } from '@tanstack/react-query';
import { useSelectAllModels } from '../use-select-all-models';
import { appsQueryKeys } from '../../query-keys';

export function useAllAppsQuery() {
  const { selectAllModels } = useSelectAllModels();

  const queryKey = appsQueryKeys.base;
  const queryFn = async () => {
    const { data } = await selectAllModels();
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
