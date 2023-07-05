import { CreateChatbotButton } from '../CreateChatbotButton';
import { ChatbotsListLoading } from './ChatbotsListLoading';
import { ClientComponent } from './ClientComponent';

export function ChatbotsSidebar() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateChatbotButton />
      <ClientComponent loading={<ChatbotsListLoading />} />
    </div>
  );
}
