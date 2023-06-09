import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseUpdatePersonaByChatbot,
  type BaseUpdatePersonaByChatbotParams,
} from '../../api/base';
import { invalidateChatbotPersonaQuery } from '@/modules/chatbots/query-keys';
import {
  cancelChatbotPersonaQuery,
  getChatbotPersonaQuery,
  setChatbotPersonaQuery,
} from '../../helpers';
import { PersonasRow } from '../../entities';

export function useBaseUpdatePersonaByChatbot() {
  const { supabase } = useSupabase();

  const updatePersonaByChatbot = async ({
    chatbot_id,
    params,
  }: BaseUpdatePersonaByChatbotParams) => {
    return await baseUpdatePersonaByChatbot({ chatbot_id, params }, supabase);
  };

  return { updatePersonaByChatbot };
}

export const handleMutation = async ({
  chatbot_id,
  params,
}: BaseUpdatePersonaByChatbotParams) => {
  // Cancel any outgoing refetches
  // so they don't overwrite our optimistic update
  await cancelChatbotPersonaQuery(chatbot_id);

  const previousPersona = getChatbotPersonaQuery(chatbot_id);

  setChatbotPersonaQuery(chatbot_id, params);

  return { previousPersona };
};

type HandleErrorParams = {
  chatbot_id: string;
  context?: { previousPersona?: PersonasRow };
};

export function handleError({ chatbot_id, context }: HandleErrorParams) {
  if (context?.previousPersona) {
    setChatbotPersonaQuery(chatbot_id, context?.previousPersona);
  }
}

export function useUpdatePersonaByChatbot() {
  const { updatePersonaByChatbot } = useBaseUpdatePersonaByChatbot();

  return useMutation({
    mutationFn: updatePersonaByChatbot,
    onMutate: handleMutation,

    onError: (_, { chatbot_id }, context) => {
      handleError({ context, chatbot_id });
    },

    onSettled(_, __, { chatbot_id }) {
      invalidateChatbotPersonaQuery(chatbot_id);
    },
  });
}
