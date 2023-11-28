import { ChatbotRow } from '@/modules/chatbots/entities';
import { ChatbotsCount } from '../ChatbotsCount';
import { ChatbotsList } from '../ChatbotsList';

type ChatbotsAreaProps = {
  chatbots: ChatbotRow[];
};

export function ChatbotsArea({ chatbots }: ChatbotsAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <ChatbotsCount chatbotsCount={chatbots.length} />
      <ChatbotsList chatbots={chatbots} />
    </div>
  );
}
