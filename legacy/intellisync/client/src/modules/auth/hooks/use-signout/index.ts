import { useSupabase } from '@/lib/supabase/Provider';
import { baseSignOut } from '../../api';

export function useSignOut() {
  const { supabase } = useSupabase();

  const signOut = async () => await baseSignOut(supabase);

  return { signOut };
}
