import { ChatbotDataSourcePage } from '@/modules/chatbots/components/pages/ChatbotDataSourcesPage';

type Params = {
  params: { id: string };
};

export default function ChatbotDetailsDataSourcePage({ params }: Params) {
  const { id } = params;

  return <ChatbotDataSourcePage chatbotId={id} />;
}
