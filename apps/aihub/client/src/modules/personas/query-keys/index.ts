import { queryClient } from '@/lib/react-query/client';

export const personasQueryKeys = {
  base: ['personas'] as const,

  all: () => [...personasQueryKeys.base] as const,
  persona: (id: string) => [...personasQueryKeys.base, id] as const,
};

export function invalidateAllPersonasQuery() {
  const queryKey = personasQueryKeys.all();

  queryClient.invalidateQueries({ queryKey });
}
