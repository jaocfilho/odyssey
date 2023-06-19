import { urlPaths } from '@/modules/navigation/urls';
import { HeaderNavigation } from '@/components/HeaderNavigation';

type ChatbotDetailsNavigationProps = {
  id: string;
};

export function ChatbotDetailsNavigation({
  id,
}: ChatbotDetailsNavigationProps) {
  const chatbotsDetailsNavigation = [
    { href: urlPaths.chatbots.details.overview(id), name: 'Overview' },
    { href: urlPaths.chatbots.details.dataSource(id), name: 'Data source' },
    { href: urlPaths.chatbots.details.chat(id), name: 'Chat' },
    { href: urlPaths.chatbots.details.persona(id), name: 'Persona' },
    { href: urlPaths.chatbots.details.settings(id), name: 'Settings' },
  ];

  return <HeaderNavigation headerNavigationItems={chatbotsDetailsNavigation} />;
}
