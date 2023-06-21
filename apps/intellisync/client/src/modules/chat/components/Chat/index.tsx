'use client';

import { useChat } from 'ai/react';

import { NewMessageForm } from './NewMessageForm';
import { ChatMessage } from './ChatMessage';

type ChatProps = {};

export function Chat({}: ChatProps) {
  const { messages, append } = useChat();

  return (
    <div className="max-w-6xl flex flex-col h-full justify-between mx-auto p-4">
      <div className="flex flex-col gap-4 overflow-y-auto px-4">
        {messages.map((message) =>
          message.role === 'system' ? null : (
            <ChatMessage key={message.id} message={message} />
          )
        )}
      </div>
      <div className="my-8 px-4">
        <NewMessageForm onSubmit={append} />
      </div>
    </div>
  );
}
