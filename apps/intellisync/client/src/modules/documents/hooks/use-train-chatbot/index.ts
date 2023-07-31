import { useMutation } from '@tanstack/react-query';

import { invalidateChatbotFileSourceQuery } from '@/modules/chatbots/query-keys';
import { baseTrainChatbot } from '../../api/base';

export function useTrainChatbot() {
  return useMutation({
    mutationFn: baseTrainChatbot,
    onSettled: async (_, __, { chatbotId }) => {
      await invalidateChatbotFileSourceQuery(chatbotId);
    },
  });
}
