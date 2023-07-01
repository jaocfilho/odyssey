import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseInsertChatbot,
  type BaseInsertChatbotParams,
} from '../../api/base';
import { invalidateAllChatbotsQuery } from '../../query-keys';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

export function useBaseInsertChatbot() {
  const { supabase } = useSupabase();

  const insertChatbot = async (params: BaseInsertChatbotParams) => {
    return await baseInsertChatbot(params, supabase);
  };

  return { insertChatbot };
}

export async function handleSettled() {
  await invalidateAllChatbotsQuery();
}

export function useInsertChatbot() {
  const { insertChatbot } = useBaseInsertChatbot();
  const { redirectToChatbotOverview } = useNavigation();

  return useMutation({
    mutationFn: insertChatbot,
    onSuccess({ data }) {
      redirectToChatbotOverview(data!.id);
    },
    onSettled: async () => await handleSettled(),
  });
}
