import { type Message } from 'ai';

import { type ChatbotsSettingsRow } from '@/modules/chatbots/entities';
import { useSelectChatbotSettingsById } from '@/modules/chatbots/hooks/use-select-chatbot-settings-by-id';
import { type PersonasRow } from '@/modules/personas/entities';
import { useSelectPersonaByChatbot } from '@/modules/personas/hooks/use-select-persona-by-chatbot';
import { useChatInitialMessages } from '@/modules/chat/hooks/use-chat-initial-messages';

type UseChatConfigProps = {
  chatbotId: string;
  initialSettings: ChatbotsSettingsRow;
  initialPersona: PersonasRow;
  initialMessages: Message[];
};

export function useChatConfig({
  chatbotId,
  initialPersona,
  initialSettings,
  initialMessages,
}: UseChatConfigProps) {
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
    { persona: initialPersona },
    { initialData: initialMessages }
  );

  return {
    settingsQuery,
    personaQuery,
    initialMessagesQuery,
  };
}
