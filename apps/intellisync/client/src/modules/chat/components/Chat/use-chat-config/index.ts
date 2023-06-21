import { type ChatbotsSettingsRow } from '@/modules/chatbots/entities';
import { useSelectChatbotSettingsById } from '@/modules/chatbots/hooks/use-select-chatbot-settings-by-id';
import { type PersonasRow } from '@/modules/personas/entities';
import { useSelectPersonaByChatbot } from '@/modules/personas/hooks/use-select-persona-by-chatbot';

type UseChatConfigProps = {
  chatbotId: string;
  initialSettings: ChatbotsSettingsRow;
  initialPersona: PersonasRow;
};

export function useChatConfig({
  chatbotId,
  initialPersona,
  initialSettings,
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
}
