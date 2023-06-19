'use client';

import { useState } from 'react';

import { SystemMessage } from './SystemMessage';
import { UserMessage } from './UserMessage';
import { NewMessageForm } from './NewMessageForm';

type ChatMessage = {
  id: number;
  author: 'system' | 'user';
  message: string;
};

type ChatProps = {};

export function Chat({}: ChatProps) {
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      id: 1,
      author: 'system',
      message: 'this is a prototype of a chat component',
    },
    {
      id: 2,
      author: 'system',
      message: 'it will be used in the chatbot details page',
    },
    { id: 3, author: 'user', message: 'this is an example of a chat message' },
  ]);

  const addUserMessage = (message: string) => {
    setChat((prevChat) => [
      ...prevChat,
      { id: prevChat.length + 1, author: 'user', message },
    ]);
  };

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
