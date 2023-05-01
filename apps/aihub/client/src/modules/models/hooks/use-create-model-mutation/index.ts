import { useMutation } from '@tanstack/react-query';

import { useInsertModel } from '../use-insert-model';
import { invalidateAllModelsQuery } from '../../helpers';

export function useCreateModelMutation() {
  const { insertModel } = useInsertModel();

  return useMutation({
    mutationFn: insertModel,
    onSuccess: () => {
      invalidateAllModelsQuery();
    },
  });
}
