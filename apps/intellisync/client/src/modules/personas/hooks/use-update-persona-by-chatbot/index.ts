import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseUpdatePersonaByChatbot,
  type BaseUpdatePersonaByChatbotParams,
} from '../../api/base';
import { invalidateChatbotPersonaQuery } from '@/modules/chatbots/query-keys';

export function useBaseUpdatePersonaByChatbot() {
  const { supabase } = useSupabase();

  const updatePersonaByChatbot = async ({
    chatbot,
    params,
  }: BaseUpdatePersonaByChatbotParams) => {
    return await baseUpdatePersonaByChatbot({ chatbot, params }, supabase);
  };

  return { updatePersonaByChatbot };
}

// export const handleMutation = async ({
//   chatbot,
//   params,
// }: BaseUpdatePersonaByChatbotParams) => {
//   // Cancel any outgoing refetches
//   // so they don't overwrite our optimistic update
//   await cancelChatbotSettingsQuery(id);

//   const previousSettings = getChatbotSettingsQuery(id);

//   setChatbotSettingsQuery(id, settings);

//   return { previousSettings };
// };

export function useUpdatePersonaByChatbot() {
  const { updatePersonaByChatbot } = useBaseUpdatePersonaByChatbot();

  return useMutation({
    mutationFn: updatePersonaByChatbot,

    onSettled(_, __, { chatbot }) {
      invalidateChatbotPersonaQuery(chatbot);
    },
  });
}
