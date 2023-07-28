import { ChatbotDataSourceUploadPage } from '@/modules/chatbots/components/pages/ChatbotDataSourceUploadPage';

type Params = {
  params: { id: string };
};

export default function ChatbotDetailsDataSourcePage({ params }: Params) {
  const { id } = params;

  return <ChatbotDataSourceUploadPage chatbotId={id} />;
}
