import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectProfileById } from '../../api/base';
import { profilesQueryKeys } from '../../query-keys';

export function useProfile() {
  const { supabase } = useSupabase();

  const queryKey = profilesQueryKeys.profile();

  const queryFn = async () => {
    const { data } = await supabase.auth.getUser();
    const { user } = data;

    if (user !== null) {
      user.id;
      const { data: profile } = await baseSelectProfileById(
        { id: user.id },
        supabase
      );

      return profile;
    }

    return user;
  };

  return useQuery({ queryKey, queryFn });
}
