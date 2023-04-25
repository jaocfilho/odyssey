import { useSupabase } from '@/lib/supabase/Provider';
import { signInWithEmail } from '../../api';

type ClientSignInWithEmailParams = {
  email: string;
  password: string;
};

export function useClientSignInWithEmail() {
  const { supabase } = useSupabase();

  const clientSignInWithEmail = async ({
    email,
    password,
  }: ClientSignInWithEmailParams) =>
    await signInWithEmail({ email, password }, supabase);

  return { clientSignInWithEmail };
}
