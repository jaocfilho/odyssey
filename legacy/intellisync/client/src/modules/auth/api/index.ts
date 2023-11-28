import type { Supabase } from '@/lib/supabase/types';

export async function signInWithGithub(supabase: Supabase) {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
}

type SignInWithEmailParams = {
  email: string;
  password: string;
};

export async function signInWithEmail(
  { email, password }: SignInWithEmailParams,
  supabase: Supabase
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function baseSignOut(supabase: Supabase) {
  return await supabase.auth.signOut();
}

export async function baseGetSessionUser(supabase: Supabase) {
  const { data } = await supabase.auth.getSession();

  return data.session?.user;
}
