import { createServerSupabase } from '@/lib/supabase/server';
import { serverSelectProfileById } from '@/modules/profiles/api/server';
import { Organization } from '../Organization';

async function getLastUsedOrganization() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();
  // user cannot be null here
  const { id } = data.user!;

  const { data: profile } = await serverSelectProfileById({ id });
  const { last_used_organization } = profile!;

  return { last_used_organization };
}

export async function OrganizationArea() {
  const { last_used_organization } = await getLastUsedOrganization();

  return (
    <div className="flex">
      <div className="flex items-center space-x-4">
        <Organization name="My organization" />
      </div>
    </div>
  );
}
