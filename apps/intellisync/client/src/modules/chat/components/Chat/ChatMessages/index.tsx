import { type Message } from 'ai';

import { ChatMessage } from '../ChatMessage';

type ChatMessagesProps = {
  messages: Message[];
};

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto px-4">
      z
      {messages.map((message) =>
        message.role === 'system' ? null : (
          <ChatMessage key={message.id} message={message} />
        )
      )}
    </div>
  );
}
