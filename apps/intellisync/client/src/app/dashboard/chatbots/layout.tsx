import { type ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';
import { ChatbotsSidebar } from '@/modules/chatbots/components/ChatbotsSidebar';
import { serverSelectAllChatbots } from '@/modules/chatbots/api/server';
import { getLastUsedOrganization } from '@/modules/organizations/helpers/server';

type ChatbotsLayoutProps = {
  children: ReactNode;
};

export default async function ChatbotsLayout({
  children,
}: ChatbotsLayoutProps) {
  const { lastUsedOrganization } = await getLastUsedOrganization();
  const { data } = await serverSelectAllChatbots({
    organizationId: lastUsedOrganization,
  });

  return (
    <MultiSidebarLayout
      header="Chatbots"
      secondarySidebarContent={<ChatbotsSidebar initialData={data} />}
    >
      {children}
    </MultiSidebarLayout>
  );
}
