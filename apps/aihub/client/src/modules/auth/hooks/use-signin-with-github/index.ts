import { useSupabase } from '@/lib/supabase/Provider';
import { signInWithGithub } from '../../api';

export function useSignInWithGithub() {
  const { supabase } = useSupabase();

  const clientSignIn = async () => await signInWithGithub(supabase);

  return { clientSignIn };
}
