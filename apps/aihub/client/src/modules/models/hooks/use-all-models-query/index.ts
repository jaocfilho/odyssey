import { useQuery } from '@tanstack/react-query';
import { useSelectAllModels } from '../use-select-all-models';
import { modelsQueryKeys } from '../../query-keys';

export function useAllModelsQuery() {
  const { selectAllModels } = useSelectAllModels();

  const queryKey = modelsQueryKeys.base;
  const queryFn = async () => {
    const { data } = await selectAllModels();
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
