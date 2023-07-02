import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  BaseDeleteChatbotFileSourceByIdParams,
  baseDeleteChatbotFileSourceById,
} from '../../api/base';
import { invalidateChatbotFileSourceQuery } from '@/modules/chatbots/query-keys';

export function useBaseDeleteChatbotFileSourceById() {
  const { supabase } = useSupabase();

  const deleteChatbotFileSourceById = async ({
    id,
  }: BaseDeleteChatbotFileSourceByIdParams) => {
    return await baseDeleteChatbotFileSourceById({ id }, supabase);
  };

  return { deleteChatbotFileSourceById };
}

export async function handleSettled(id: string) {
  await invalidateChatbotFileSourceQuery(id);
}

export function useDeleteChatbotFileSourceById() {
  const { deleteChatbotFileSourceById } = useBaseDeleteChatbotFileSourceById();

  return useMutation({
    mutationFn: deleteChatbotFileSourceById,
    onSettled: async (_, __, { id }) => {
      await handleSettled(id);
    },
  });
}
