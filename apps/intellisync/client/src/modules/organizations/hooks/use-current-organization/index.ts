import { useProfile } from '@/modules/profiles/hooks/use-profile';
import { useSelectOrganizationById } from '../use-select-organization-by-id';

export function useCurrentOrganization() {
  const profileQuery = useProfile();

  return useSelectOrganizationById(
    {
      id: profileQuery.data?.last_used_organization!,
    },
    { enabled: !!profileQuery.data?.last_used_organization }
  );
}
