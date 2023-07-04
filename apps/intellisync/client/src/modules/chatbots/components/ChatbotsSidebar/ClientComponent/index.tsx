'use client';

import { useSelectAllChatbots } from '@/modules/chatbots/hooks/use-select-all-chatbots';
import { ChatbotsArea } from '../ChatbotsArea';
import { ReactNode } from 'react';

type ClientComponentProps = {
  loading: ReactNode;
};

export function ClientComponent({ loading }: ClientComponentProps) {
  const chatbotsQuery = useSelectAllChatbots();

  if (chatbotsQuery.data) {
    return <ChatbotsArea chatbots={chatbotsQuery.data} />;
  }

  if (chatbotsQuery.isLoading) {
    return <>{loading}</>;
  }

  return null;
}
