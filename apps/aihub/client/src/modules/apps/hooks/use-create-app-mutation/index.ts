import { useMutation } from '@tanstack/react-query';

import { useInsertApp } from '../use-insert-app';
import { invalidateAllAppsQuery } from '../../helpers';

export function useCreateAppMutation() {
  const { insertApp } = useInsertApp();

  return useMutation({
    mutationFn: insertApp,
    onSuccess: () => {
      invalidateAllAppsQuery();
    },
  });
}
