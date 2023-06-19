'use client';

import { useState } from 'react';

import { Textarea } from 'tailwind-ui';

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

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {chat.map(({ message, author, id }) => (
          <div key={id} className="px-4 py-2 rounded-sm dark:bg-grayScheme-900">
            <p>{message}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Textarea rows={4} />
      </div>
    </div>
  );
}
