import { createServerSupabase } from '@/lib/supabase/server';
import { serverSelectProfileById } from '@/modules/profiles/api/server';
import { Organization } from '../Organization';

async function getLastUsedOrganization() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getSession();
  // user cannot be null here
  const { user } = data.session!;

  const { data: profile } = await serverSelectProfileById({ id: user.id });
  return { profile };
}

export async function OrganizationArea() {
  const { profile } = await getLastUsedOrganization();

  return (
    <div className="flex">
      <div className="flex items-center space-x-4">
        <Organization organizationId={profile!.last_used_organization!} />
      </div>
    </div>
  );
}
