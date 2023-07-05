import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAllChatbots,
  type BaseSelectAllChatbotsParams,
} from '../../api/base';
import { chatbotsQueryKeys } from '../../query-keys';
import { useProfile } from '@/modules/profiles/hooks/use-profile';

export function useBaseSelectAllChatbots() {
  const { supabase } = useSupabase();

  const selectAllChatbots = async ({
    organizationId,
  }: BaseSelectAllChatbotsParams) => {
    return await baseSelectAllChatbots({ organizationId }, supabase);
  };

  return { selectAllChatbots };
}

export function useSelectAllChatbots() {
  const { selectAllChatbots } = useBaseSelectAllChatbots();
  const profileQuery = useProfile();

  const queryKey = chatbotsQueryKeys.all();
  const queryFn = async () => {
    if (!profileQuery.data) return null;

    const { last_used_organization } = profileQuery.data;

    const { data } = await selectAllChatbots({
      organizationId: last_used_organization!,
    });
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
