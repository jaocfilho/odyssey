import { useSupabase } from '@/lib/supabase/Provider';
import { signIn } from '../../api';

export function useClientSignIn() {
  const { supabase } = useSupabase();

  const clientSignIn = async () => await signIn(supabase);

  return { clientSignIn };
}
