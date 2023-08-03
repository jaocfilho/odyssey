import { ChatbotDataSourceUploadPage as Page } from '@/modules/chatbots/components/pages/ChatbotDataSourceUploadPage';

type Params = {
  params: { id: string };
};

export default function ChatbotDataSourceUploadPage({ params }: Params) {
  const { id } = params;

  return <Page chatbotId={id} />;
}
