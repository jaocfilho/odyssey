import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '../query-keys';
import { ChatbotsSettingsRow, ChatbotsSettingsUpdate } from '../entities';

export function setChatbotSettingsQuery(
  id: string,
  data: ChatbotsSettingsUpdate
) {
  const queryKey = chatbotsQueryKeys.settings(id);
  return queryClient.setQueryData<ChatbotsSettingsRow>(queryKey, (old) => {
    if (!!old) {
      return { ...old, ...data };
    }
  });
}

export function getChatbotSettingsQuery(id: string) {
  const queryKey = chatbotsQueryKeys.settings(id);
  return queryClient.getQueryData<ChatbotsSettingsRow>(queryKey);
}

export async function cancelChatbotSettingsQuery(id: string) {
  const queryKey = chatbotsQueryKeys.settings(id);
  return await queryClient.cancelQueries(queryKey);
}
