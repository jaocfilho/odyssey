import { queryClient } from '@/lib/react-query/client';

export const chatbotsQueryKeys = {
  base: ['chatbots'] as const,

  all: () => [...chatbotsQueryKeys.base] as const,
  settings: (id: string) =>
    [...chatbotsQueryKeys.base, id, 'settings'] as const,
  persona: (id: string) => [...chatbotsQueryKeys.base, id, 'persona'] as const,
  initialMessages: (id: string) =>
    [...chatbotsQueryKeys.base, id, 'initialMessages'] as const,
  fileSources: (id: string) =>
    [...chatbotsQueryKeys.base, id, 'fileSources'] as const,
};

export async function invalidateAllChatbotsQuery() {
  const queryKey = chatbotsQueryKeys.all();

  await queryClient.invalidateQueries({ queryKey });
}

export async function invalidateChatbotSettingsQuery(id: string) {
  const queryKey = chatbotsQueryKeys.settings(id);

  await queryClient.invalidateQueries({ queryKey });
}

export async function invalidateChatbotPersonaQuery(id: string) {
  const queryKey = chatbotsQueryKeys.persona(id);

  await queryClient.invalidateQueries({ queryKey });
}

export async function invalidateChatbotFileSourceQuery(id: string) {
  const queryKey = chatbotsQueryKeys.fileSources(id);

  await queryClient.invalidateQueries({ queryKey });
}
