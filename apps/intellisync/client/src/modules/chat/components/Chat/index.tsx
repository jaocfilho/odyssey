'use client';

import { useState } from 'react';

import { SystemMessage } from './SystemMessage';
import { UserMessage } from './UserMessage';
import { NewMessageForm } from './NewMessageForm';
import { useChat } from '../../hooks/use-chat';

type ChatMessage = {
  id: number;
  author: 'system' | 'user';
  message: string;
};

type ChatProps = {};

export function Chat({}: ChatProps) {
  const { chat, addUserMessage } = useChat();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        {chat.map(({ message, author, id }) =>
          author === 'system' ? (
            <SystemMessage key={id} message={message} />
          ) : (
            <UserMessage key={id} message={message} />
          )
        )}
      </div>
      <div className="mt-8">
        <NewMessageForm onSubmit={({ message }) => addUserMessage(message)} />
      </div>
    </div>
  );
}
