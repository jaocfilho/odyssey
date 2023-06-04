'use client';

import { type BaseSelectAllChatbotsReturnData } from '../../api/base';
import { useSelectAllChatbots } from '../../hooks/use-select-all-chatbots';
import { CreateChatbotButton } from '../CreateChatbotButton';
import { ChatbotsCount } from './ChatbotsCount';
import { ChatbotsList } from './ChatbotsList';

type ChatbotsSidebarProps = {
  initialData: BaseSelectAllChatbotsReturnData;
};

export function ChatbotsSidebar({ initialData }: ChatbotsSidebarProps) {
  const chatbotsQuery = useSelectAllChatbots({ initialData });

  const chatbots = chatbotsQuery.data!.map(({ id, name }) => ({
    id,
    name,
  }));

  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateChatbotButton />
      <div className="flex flex-col gap-2">
        <ChatbotsCount chatbotsCount={chatbots.length} />
        <ChatbotsList chatbots={chatbots} />
      </div>
    </div>
  );
}
