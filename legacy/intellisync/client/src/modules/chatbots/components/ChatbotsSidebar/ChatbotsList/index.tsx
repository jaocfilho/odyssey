import { ChatbotRow } from '@/modules/chatbots/entities';
import { ChatbotsListItem } from '../ChatbotsListItem';

type ChatbotsListProps = {
  chatbots: ChatbotRow[];
};

export function ChatbotsList({ chatbots }: ChatbotsListProps) {
  return (
    <nav className="flex flex-1 flex-col" aria-label="personas-sidebar">
      <ul role="list" className="space-y-1">
        {chatbots.map(({ id, name }) => (
          <ChatbotsListItem key={id} id={id} name={name} />
        ))}
      </ul>
    </nav>
  );
}
