import { type Message } from 'ai';

import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { PersonasRow, PersonasUpdate } from '../../entities';

export async function cancelChatbotPersonaQuery(chatbot_id: string) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return await queryClient.cancelQueries(queryKey);
}

export function getChatbotPersonaQuery(chatbot_id: string) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return queryClient.getQueryData<PersonasRow>(queryKey);
}

export function setChatbotPersonaQuery(
  chatbot_id: string,
  data: PersonasUpdate
) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return queryClient.setQueryData<PersonasRow>(queryKey, (old) => {
    if (!!old) {
      return { ...old, ...data };
    }
  });
}

export function getChatbotInitialMessagesQuery(chatbot_id: string) {
  const queryKey = chatbotsQueryKeys.initialMessages(chatbot_id);
  return queryClient.getQueryData<Message[]>(queryKey);
}

export function setChatbotInitialMessagesQuery(
  chatbot_id: string,
  data: Message[]
) {
  const queryKey = chatbotsQueryKeys.initialMessages(chatbot_id);
  return queryClient.setQueryData<Message[]>(queryKey, data);
}
