import { type ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';
import { ChatbotsSidebar } from '@/modules/chatbots/components/ChatbotsSidebar';

type ChatbotsLayoutProps = {
  children: ReactNode;
};

export default function ChatbotsLayout({ children }: ChatbotsLayoutProps) {
  return (
    <MultiSidebarLayout
      header="Chatbots"
      secondarySidebarContent={<ChatbotsSidebar />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
