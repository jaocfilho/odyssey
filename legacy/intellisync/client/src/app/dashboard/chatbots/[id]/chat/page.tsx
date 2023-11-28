import { ChatPage } from '@/modules/chat/components/pages/ChatPage';

type ChatbotDetailsChatPageProps = {
  params: { id: string };
};

export default function ChatbotDetailsChatPage({
  params,
}: ChatbotDetailsChatPageProps) {
  const { id } = params;

  return <ChatPage chatbotId={id} />;
}
