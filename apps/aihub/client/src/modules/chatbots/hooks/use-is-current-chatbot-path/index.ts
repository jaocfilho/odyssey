import { useParams } from 'next/navigation';

import { useIsChatbotsPath } from '../use-is-chatbots-path';

export function useIsCurrentChatbotPath(chatbotId: string) {
  const params = useParams();
  const isChatbotsPath = useIsChatbotsPath();

  if (!isChatbotsPath) return false;

  const { id } = params;
  return chatbotId === id;
}
