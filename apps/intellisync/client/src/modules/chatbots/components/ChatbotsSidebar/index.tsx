'use client';

import { type BaseSelectAllChatbotsReturnData } from '../../api/base';
import { useSelectAllChatbots } from '../../hooks/use-select-all-chatbots';
import { CreateChatbotButton } from '../CreateChatbotButton';
import { ChatbotsArea } from './ChatbotsArea';
import { ChatbotsListLoading } from './ChatbotsListLoading';

type ChatbotsSidebarProps = {
  initialData: BaseSelectAllChatbotsReturnData;
};

export function ChatbotsSidebar({ initialData }: ChatbotsSidebarProps) {
  const chatbotsQuery = useSelectAllChatbots({ initialData });

  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateChatbotButton />
      {chatbotsQuery.data ? (
        <ChatbotsArea chatbots={chatbotsQuery.data} />
      ) : null}
      {chatbotsQuery.isLoading ? <ChatbotsListLoading /> : null}
    </div>
  );
}
