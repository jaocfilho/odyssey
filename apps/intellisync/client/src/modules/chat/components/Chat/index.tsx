'use client';

import { useChat } from 'ai/react';

import { NewMessageForm } from './NewMessageForm';
import { ChatMessages } from './ChatMessages';

type ChatProps = {};

export function Chat({}: ChatProps) {
  const { messages, append } = useChat();

  return (
    <div className="max-w-6xl flex flex-col h-full justify-between mx-auto p-4">
      <ChatMessages messages={messages} />
      <div className="my-8 px-4">
        <NewMessageForm onSubmit={append} />
      </div>
    </div>
  );
}
