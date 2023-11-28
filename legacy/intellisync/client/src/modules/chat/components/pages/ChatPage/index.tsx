import { serverSelectChatbotSettingsById } from '@/modules/chatbots/api/server';
import { Chat } from '../../Chat';
import { serverSelectPersonaByChatbot } from '@/modules/personas/api/server';
import { getPersonaInitialMessages } from '@/modules/personas/helpers';

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

  const initialMessages = await getPersonaInitialMessages(persona!);

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
