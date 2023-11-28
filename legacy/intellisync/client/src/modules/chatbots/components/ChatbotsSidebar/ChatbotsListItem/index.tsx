import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { useIsCurrentChatbotPath } from '@/modules/chatbots/hooks/use-is-current-chatbot-path';
import { ChatbotsDetailsDataSourceLink } from '@/modules/navigation/components/ChatbotsDetailsDataSourceLink';

type ChatbotsListItemProps = {
  id: string;
  name: string;
};

export function ChatbotsListItem({ id, name }: ChatbotsListItemProps) {
  const current = useIsCurrentChatbotPath(id);

  return (
    <li>
      <ChatbotsDetailsDataSourceLink id={id}>
        <SecondarySidebarItem current={current}>{name}</SecondarySidebarItem>
      </ChatbotsDetailsDataSourceLink>
    </li>
  );
}
