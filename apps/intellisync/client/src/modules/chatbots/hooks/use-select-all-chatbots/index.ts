import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAllChatbots,
  type BaseSelectAllChatbotsParams,
} from '../../api/base';
import { chatbotsQueryKeys } from '../../query-keys';

export function useBaseSelectAllChatbots() {
  const { supabase } = useSupabase();

  const selectAllChatbots = async ({
    organizationId,
  }: BaseSelectAllChatbotsParams) => {
    return await baseSelectAllChatbots({ organizationId }, supabase);
  };

  return { selectAllChatbots };
}

type UseSelectAllChatbotsOptions = {
  enabled?: boolean;
};

export function useSelectAllChatbots(
  { organizationId }: BaseSelectAllChatbotsParams,
  options?: UseSelectAllChatbotsOptions
) {
  const { selectAllChatbots } = useBaseSelectAllChatbots();

  const queryKey = chatbotsQueryKeys.all();
  const queryFn = async () => {
    const { data } = await selectAllChatbots({
      organizationId,
    });
    return data;
  };

  return useQuery({ queryKey, queryFn, enabled: options?.enabled });
}
