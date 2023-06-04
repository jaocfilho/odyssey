import { ReactNode } from 'react';

import { ChatbotDetailsNavigation } from '@/modules/chatbots/components/ChatbotDetailsNavigation';

type ChatbotDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default function ChatbotDetailsLayout({
  children,
  params,
}: ChatbotDetailsLayoutProps) {
  const { id } = params;

  return (
    <div>
      <ChatbotDetailsNavigation id={id} />
      {children}
    </div>
  );
}
