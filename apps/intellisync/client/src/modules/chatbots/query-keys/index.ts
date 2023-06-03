import { queryClient } from '@/lib/react-query/client';

export const chatbotsQueryKeys = {
  base: ['chatbots'] as const,

  all: () => [...chatbotsQueryKeys.base] as const,
};

export function invalidateAllChatbotsQuery() {
  const queryKey = chatbotsQueryKeys.all();

  queryClient.invalidateQueries({ queryKey });
}
