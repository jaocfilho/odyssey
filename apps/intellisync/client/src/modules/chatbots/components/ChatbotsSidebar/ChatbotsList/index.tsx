import { ChatbotsListItem } from '../ChatbotsListItem';

type Chatbot = {
  id: string;
  name: string;
};

type ChatbotsListProps = {
  chatbots: Chatbot[];
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
