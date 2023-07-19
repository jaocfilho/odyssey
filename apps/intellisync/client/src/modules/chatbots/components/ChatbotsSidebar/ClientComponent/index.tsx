'use client';

import { type ReactNode } from 'react';

import { ChatbotsArea } from '../ChatbotsArea';
import { useChatbots } from '@/modules/chatbots/hooks/use-chatbots';

type ClientComponentProps = {
  loading: ReactNode;
};

export function ClientComponent({ loading }: ClientComponentProps) {
  const chatbotsQuery = useChatbots();

  if (chatbotsQuery.data) {
    return <ChatbotsArea chatbots={chatbotsQuery.data} />;
  }

  if (chatbotsQuery.isLoading) {
    return <>{loading}</>;
  }

  return null;
}
