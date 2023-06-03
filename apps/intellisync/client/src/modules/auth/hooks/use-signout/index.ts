import { useSupabase } from '@/lib/supabase/Provider';
import { signOut } from '../../api';

export function useSignOut() {
  const { supabase } = useSupabase();

  const clientSignOut = async () => await signOut(supabase);

  return { clientSignOut };
}
