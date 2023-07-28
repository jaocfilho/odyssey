import { CreateChatbotButton } from '../CreateChatbotButton';
import { ChatbotsListLoading } from './ChatbotsListLoading';
import { Chatbots } from './Chatbots';

export function ChatbotsSidebar() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateChatbotButton />
      <Chatbots loading={<ChatbotsListLoading />} />
    </div>
  );
}
