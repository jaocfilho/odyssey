import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseDeleteChatbotById,
  type BaseDeleteChatbotByIdParams,
} from '../../api/base';
import { invalidateAllChatbotsQuery } from '../../query-keys';
import { removeChatbotFromQueryClient } from '../../helpers';

export function useBaseDeleteChatbotById() {
  const { supabase } = useSupabase();

  const deleteChatbotById = async ({ id }: BaseDeleteChatbotByIdParams) => {
    return await baseDeleteChatbotById({ id }, supabase);
  };

  return { deleteChatbotById };
}

export function handleSettled() {
  invalidateAllChatbotsQuery();
}

export function handleSuccess(id: string) {
  removeChatbotFromQueryClient(id);
}

export function useDeleteChatbotById() {
  const { deleteChatbotById } = useBaseDeleteChatbotById();

  return useMutation({
    mutationFn: deleteChatbotById,
    onSuccess: (_, { id }) => handleSuccess(id),
    onSettled: () => handleSettled(),
  });
}
