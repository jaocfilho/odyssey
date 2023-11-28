import { serverSelectPersonaByChatbot } from '@/modules/personas/api/server';
import { ChatbotPersona } from '@/modules/personas/components/ChatbotPersona';

type ChatbotDetailsPersonaPageProps = {
  params: { id: string };
};

export default async function ChatbotDetailsPersonaPage({
  params,
}: ChatbotDetailsPersonaPageProps) {
  const chatbot_id = params.id;

  const { data } = await serverSelectPersonaByChatbot({ chatbot_id });

  return <ChatbotPersona persona={data!} />;
}
