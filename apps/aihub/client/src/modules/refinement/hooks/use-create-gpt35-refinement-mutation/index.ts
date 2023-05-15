import { useMutation } from '@tanstack/react-query';

import { useInsertGpt35Refinement } from '../use-insert-gpt35-refinement';

export function useCreateGpt35RefinementMutation() {
  const { insertGpt35Refinement } = useInsertGpt35Refinement();

  return useMutation({
    mutationFn: insertGpt35Refinement,
  });
}
