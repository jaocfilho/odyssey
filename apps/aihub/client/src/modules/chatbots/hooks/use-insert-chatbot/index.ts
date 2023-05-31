import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseInsertChatbot,
  type BaseInsertChatbotParams,
} from '../../api/base';
import { invalidateAllChatbotsQuery } from '../../query-keys';

export function useBaseInsertChatbot() {
  const { supabase } = useSupabase();

  const insertChatbot = async (params: BaseInsertChatbotParams) => {
    return await baseInsertChatbot(params, supabase);
  };

  return { insertChatbot };
}

export function useInsertChatbot() {
  const { insertChatbot } = useBaseInsertChatbot();

  return useMutation({
    mutationFn: insertChatbot,
    onSuccess: () => {
      invalidateAllChatbotsQuery();
    },
  });
}
