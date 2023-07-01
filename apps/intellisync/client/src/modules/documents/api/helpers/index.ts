import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { ChatbotsFilesSourcesRow } from '../../entities';

export async function invalidateChatbotFileSourceQuery(id: string) {
  const queryKey = chatbotsQueryKeys.fileSources(id);
  await queryClient.invalidateQueries<ChatbotsFilesSourcesRow[]>(queryKey);
}
