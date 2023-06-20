'use client';

import { SystemMessage } from './SystemMessage';
import { UserMessage } from './UserMessage';
import { NewMessageForm } from './NewMessageForm';
import { useChat } from '../../hooks/use-chat';

type ChatProps = {};

export function Chat({}: ChatProps) {
  const { chat, addUserMessage } = useChat({
    onAddUserMessage: console.log,
  });

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
        <NewMessageForm onSubmit={addUserMessage} />
      </div>
    </div>
  );
}
