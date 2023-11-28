import { type Message } from 'ai';

import { useQuery } from '@tanstack/react-query';

import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { PersonasRow } from '@/modules/personas/entities';
import { getPersonaInitialMessages } from '@/modules/personas/helpers';

type UseChatInitialMessagesProps = {
  persona: PersonasRow;
};

type UseChatInitialMessagesOptions = {
  initialData?: Message[];
};

export function useChatInitialMessages(
  { persona }: UseChatInitialMessagesProps,
  options?: UseChatInitialMessagesOptions
) {
  const queryKey = chatbotsQueryKeys.initialMessages(persona.chatbot_id);
  const queryFn = async () => {
    const initialMessages = await getPersonaInitialMessages(persona);
    return initialMessages;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
