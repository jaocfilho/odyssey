import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '../query-keys';
import {
  type ChatbotsSettingsRow,
  type ChatbotsSettingsUpdate,
  type ChatbotRow,
} from '../entities';

export function removeChatbotFromQueryClient(id: string) {
  const queryKey = chatbotsQueryKeys.all();
  return queryClient.setQueryData<ChatbotRow[]>(queryKey, (old) => {
    if (old === undefined) return old;
    return old.filter((chatbot) => chatbot.id !== id);
  });
}

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
