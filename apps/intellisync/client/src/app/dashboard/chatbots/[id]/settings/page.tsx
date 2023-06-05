import { serverSelectChatbotSettingsById } from '@/modules/chatbots/api/server';
import { ChatbotSettings } from '@/modules/chatbots/components/ChatbotSettings';

type ChatbotDetailsSettingsPageProps = {
  params: { id: string };
};

export default async function ChatbotDetailsSettingsPage({
  params,
}: ChatbotDetailsSettingsPageProps) {
  const { id } = params;

  const { data } = await serverSelectChatbotSettingsById({ id });

  return <ChatbotSettings initialData={data} />;
}
