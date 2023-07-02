import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  BaseDeleteChatbotFileSourceByIdParams,
  baseDeleteChatbotFileSourceById,
} from '../../api/base';
import {
  getChatbotFileSourceQueryData,
  invalidateChatbotFileSourceQuery,
  setChatbotFileSourceQueryData,
} from '@/modules/chatbots/query-keys';

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

export function handleSuccess(id: string) {
  const previousData = getChatbotFileSourceQueryData(id);
  const data = previousData?.filter((item) => item.id !== id);

  if (data) {
    setChatbotFileSourceQueryData(id, data);
  }
}

type UseDeleteChatbotFileSourceByIdProps = {
  chatbotId: string;
};

export function useDeleteChatbotFileSourceById({
  chatbotId,
}: UseDeleteChatbotFileSourceByIdProps) {
  const { deleteChatbotFileSourceById } = useBaseDeleteChatbotFileSourceById();

  return useMutation({
    mutationFn: deleteChatbotFileSourceById,
    onSettled: async () => {
      await handleSettled(chatbotId);
    },
    onSuccess() {
      handleSuccess(chatbotId);
    },
  });
}
