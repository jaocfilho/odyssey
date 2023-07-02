import { useParams } from 'next/navigation';

export function useGetCurrentChatbotId() {
  const { id: chatbotId } = useParams();

  return { chatbotId };
}
