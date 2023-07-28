import { useParams } from 'next/navigation';

type UseGetCurrentChatbotIdReturn = {
  chatbotId: string;
};

export function useGetCurrentChatbotId() {
  const { id: chatbotId } = useParams();

  return { chatbotId } as UseGetCurrentChatbotIdReturn;
}
