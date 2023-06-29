'use client';

import { useChat } from 'ai/react';
import { type Message } from 'ai';

import { NewMessageForm } from './NewMessageForm';
import { ChatMessages } from './ChatMessages';
import { ChatbotsSettingsRow } from '@/modules/chatbots/entities';
import { PersonasRow } from '@/modules/personas/entities';
import { useChatbot } from '@/modules/chatbots/hooks/use-chatbot';
import { apiEndpoints } from '@/modules/requests/endpoints';

type ChatProps = {
  chatbotId: string;
  initialSettings: ChatbotsSettingsRow;
  initialPersona: PersonasRow;
  initialMessages: Message[];
};

export function Chat({
  chatbotId,
  initialPersona,
  initialSettings,
  initialMessages,
}: ChatProps) {
  const { initialMessagesQuery } = useChatbot({
    chatbotId,
    initialPersona,
    initialSettings,
    initialMessages,
  });

  const api = apiEndpoints.chatbots.chat(chatbotId);
  const { messages, append, isLoading } = useChat({
    initialMessages: initialMessagesQuery.data,
    api: `/${api}`,
  });

  return (
    <div className="max-w-6xl flex flex-col h-full justify-between mx-auto p-4">
      <ChatMessages messages={messages} />
      <div className="my-8 px-4">
        <NewMessageForm onSubmit={append} />
      </div>
    </div>
  );
}
