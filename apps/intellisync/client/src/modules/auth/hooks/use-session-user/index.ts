import { useSupabase } from '@/lib/supabase/Provider';
import { baseGetSessionUser } from '../../api';

export function useSessionUser() {
  const { supabase } = useSupabase();

  const getSessionUser = async () => {
    const user = await baseGetSessionUser(supabase);

    return { user };
  };

  return { getSessionUser };
}
