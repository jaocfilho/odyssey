import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAllChatbots,
  type BaseSelectAllChatbotsReturnData,
} from '../../api/base';
import { chatbotsQueryKeys } from '../../query-keys';

export function useBaseSelectAllChatbots() {
  const { supabase } = useSupabase();

  const selectAllChatbots = async () => {
    return await baseSelectAllChatbots(supabase);
  };

  return { selectAllChatbots };
}

type UseSelectAllChatbotsOptions = {
  initialData?: BaseSelectAllChatbotsReturnData;
};

export function useSelectAllChatbots(options?: UseSelectAllChatbotsOptions) {
  const { selectAllChatbots } = useBaseSelectAllChatbots();

  const queryKey = chatbotsQueryKeys.all();
  const queryFn = async () => {
    const { data } = await selectAllChatbots();
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
