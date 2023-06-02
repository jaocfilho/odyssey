'use client';

import { type BaseSelectAllChatbotsReturnData } from '../../api/base';
import { useSelectAllChatbots } from '../../hooks/use-select-all-chatbots';
import { CreateChatbotButton } from '../CreateChatbotButton';

type ChatbotsSidebarProps = {
  initialData: BaseSelectAllChatbotsReturnData;
};

export function ChatbotsSidebar({ initialData }: ChatbotsSidebarProps) {
  const chatbotsQuery = useSelectAllChatbots({ initialData });

  console.log('chatbots client data', chatbotsQuery.data);

  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateChatbotButton />
    </div>
  );
}
