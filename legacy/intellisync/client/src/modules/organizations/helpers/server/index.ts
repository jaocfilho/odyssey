import { serverGetSessionUser } from '@/modules/auth/api/server';
import { serverSelectProfileById } from '@/modules/profiles/api/server';

export async function getLastUsedOrganization() {
  const user = await serverGetSessionUser();

  const { data: profile } = await serverSelectProfileById({ id: user!.id });

  const lastUsedOrganization = profile!.last_used_organization!;

  return { lastUsedOrganization };
}
