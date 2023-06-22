import { type Message } from 'ai';

import { useSelectPersonaByChatbot } from '@/modules/personas/hooks/use-select-persona-by-chatbot';
import { useSelectChatbotSettingsById } from '../use-select-chatbot-settings-by-id';
import { useChatInitialMessages } from '@/modules/chat/hooks/use-chat-initial-messages';
import { type PersonasRow } from '@/modules/personas/entities';
import { type ChatbotsSettingsRow } from '../../entities';

type UseChatbotProps = {
  chatbotId: string;
  initialSettings?: ChatbotsSettingsRow;
  initialPersona?: PersonasRow;
  initialMessages?: Message[];
};

export function useChatbot({
  chatbotId,
  initialMessages,
  initialPersona,
  initialSettings,
}: UseChatbotProps) {
  const settingsQuery = useSelectChatbotSettingsById(
    { id: chatbotId },
    {
      initialData: initialSettings,
    }
  );

  const personaQuery = useSelectPersonaByChatbot(
    { chatbot_id: chatbotId },
    { initialData: initialPersona }
  );

  const initialMessagesQuery = useChatInitialMessages(
    { persona: personaQuery.data! },
    { initialData: initialMessages }
  );

  return {
    settingsQuery,
    personaQuery,
    initialMessagesQuery,
  };
}
