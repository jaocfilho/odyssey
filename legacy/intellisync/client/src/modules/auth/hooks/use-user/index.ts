import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import { usersQueryKeys } from '../../query-keys';

export function useUser() {
  const { supabase } = useSupabase();

  const queryKey = usersQueryKeys.user();
  const queryFn = async () => {
    const { data } = await supabase.auth.getUser();
    const { user } = data;

    return user;
  };

  return useQuery({ queryKey, queryFn });
}
