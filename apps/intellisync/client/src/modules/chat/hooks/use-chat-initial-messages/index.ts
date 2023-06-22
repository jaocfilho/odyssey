import { type Message } from 'ai';

import { useQuery } from '@tanstack/react-query';

import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { PersonasRow } from '@/modules/personas/entities';
import {
  createPersonaPromptMessages,
  formatSystemMessages,
} from '@/modules/personas/helpers';

async function getInitialMessages(persona: PersonasRow) {
  const { id, chatbot_id, context, created_at, updated_at, ...personaOptions } =
    persona;
  const baseMessages = await createPersonaPromptMessages(personaOptions);

  const initialMessages = formatSystemMessages(baseMessages);

  return { initialMessages };
}

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
    const { initialMessages } = await getInitialMessages(persona);
    return initialMessages;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
