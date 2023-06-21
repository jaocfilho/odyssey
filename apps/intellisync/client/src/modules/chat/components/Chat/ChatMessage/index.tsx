import { type Message } from 'ai';

import { AssistantMessage } from '../AssistantMessage';
import { UserMessage } from '../UserMessage';

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const { content, role } = message;

  return (
    <>
      {role === 'assistant' ? (
        <AssistantMessage message={content} />
      ) : (
        <UserMessage message={content} />
      )}
    </>
  );
}
