import { serverSelectChatbotSettingsById } from '@/modules/chatbots/api/server';
import { Chat } from '../../Chat';
import { serverSelectPersonaByChatbot } from '@/modules/personas/api/server';
import {
  createPersonaChatMessages,
  formatSystemMessages,
} from '@/modules/personas/helpers';
import { PersonasRow } from '@/modules/personas/entities';

async function getMessages(persona: PersonasRow) {
  const { id, chatbot_id, context, created_at, updated_at, ...personaOptions } =
    persona;
  const baseMessages = await createPersonaChatMessages(personaOptions);

  const messages = formatSystemMessages(baseMessages);

  return messages;
}

type ChatPageProps = {
  chatbotId: string;
};

export async function ChatPage({ chatbotId }: ChatPageProps) {
  const { data: settings } = await serverSelectChatbotSettingsById({
    id: chatbotId,
  });
  const { data: persona } = await serverSelectPersonaByChatbot({
    chatbot_id: chatbotId,
  });

  const initialMessages = await getMessages(persona!);

  return (
    <div className="relative flex flex-col h-full">
      <div className="absolute inset-0">
        <Chat
          chatbotId={chatbotId}
          initialPersona={persona!}
          initialSettings={settings!}
          initialMessages={initialMessages}
        />
      </div>
    </div>
  );
}
