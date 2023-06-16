import { createServerSupabase } from '@/lib/supabase/server';
import { serverSelectProfileById } from '@/modules/profiles/api/server';

export async function getLastUsedOrganization() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getSession();
  // user cannot be null here
  const { user } = data.session!;

  const { data: profile } = await serverSelectProfileById({ id: user.id });

  const lastUsedOrganization = profile!.last_used_organization!;

  return { lastUsedOrganization };
}
