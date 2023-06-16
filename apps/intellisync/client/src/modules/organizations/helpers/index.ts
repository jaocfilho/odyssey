import { queryClient } from '@/lib/react-query/client';
import { currentQueryKey } from '../query-keys';
import { BaseSelectOrganizationByIdReturnData } from '../api/base';
import { createServerSupabase } from '@/lib/supabase/server';
import { serverSelectProfileById } from '@/modules/profiles/api/server';

export function setCurrentOrganization(
  initialData: BaseSelectOrganizationByIdReturnData
) {
  const queryKey = currentQueryKey();
  return queryClient.setQueryData(queryKey, initialData);
}

export function getCurrentOrganization() {
  const queryKey = currentQueryKey();
  return queryClient.getQueryData<BaseSelectOrganizationByIdReturnData>(
    queryKey
  );
}

export async function getLastUsedOrganization() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getSession();
  // user cannot be null here
  const { user } = data.session!;

  const { data: profile } = await serverSelectProfileById({ id: user.id });

  const lastUsedOrganization = profile!.last_used_organization!;

  return { lastUsedOrganization };
}
