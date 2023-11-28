import { ReactNode } from 'react';

import { ChatbotDetailsNavigation } from '@/modules/chatbots/components/ChatbotDetailsNavigation';
import { ChatbotDetailsHeader } from '@/modules/chatbots/components/ChatbotDetailsHeader';
import { serverSelectChatbotById } from '@/modules/chatbots/api/server';

type ChatbotDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default async function ChatbotDetailsLayout({
  children,
  params,
}: ChatbotDetailsLayoutProps) {
  const { id } = params;

  const { data } = await serverSelectChatbotById({ id });

  return (
    <div className="flex flex-col h-full">
      <ChatbotDetailsNavigation id={id} />
      <ChatbotDetailsHeader name={data?.name} />
      {children}
    </div>
  );
}
