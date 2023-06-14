import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { useIsCurrentChatbotPath } from '@/modules/chatbots/hooks/use-is-current-chatbot-path';
import { ChatbotsDetailsOverviewLink } from '@/modules/navigation/components/ChatbotsDetailsOverviewLink';

type ChatbotsListItemProps = {
  id: string;
  name: string;
};

export function ChatbotsListItem({ id, name }: ChatbotsListItemProps) {
  const current = useIsCurrentChatbotPath(id);

  return (
    <li>
      <ChatbotsDetailsOverviewLink id={id}>
        <SecondarySidebarItem current={current}>{name}</SecondarySidebarItem>
      </ChatbotsDetailsOverviewLink>
    </li>
  );
}
