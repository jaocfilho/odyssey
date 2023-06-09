import { queryClient } from '@/lib/react-query/client';

export const chatbotsQueryKeys = {
  base: ['chatbots'] as const,

  all: () => [...chatbotsQueryKeys.base] as const,
  settings: (id: string) =>
    [...chatbotsQueryKeys.base, id, 'settings'] as const,
  persona: (id: string) => [...chatbotsQueryKeys.base, id, 'persona'] as const,
};

export function invalidateAllChatbotsQuery() {
  const queryKey = chatbotsQueryKeys.all();

  queryClient.invalidateQueries({ queryKey });
}

export function invalidateChatbotSettingsQuery(id: string) {
  const queryKey = chatbotsQueryKeys.settings(id);

  queryClient.invalidateQueries({ queryKey });
}

export function invalidateChatbotPersonaQuery(id: string) {
  const queryKey = chatbotsQueryKeys.persona(id);

  queryClient.invalidateQueries({ queryKey });
}
