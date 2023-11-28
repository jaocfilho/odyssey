import { useCurrentOrganization } from '@/modules/organizations/hooks/use-current-organization';
import { useSelectMessageCreditsByOrganizationId } from '../use-select-message-credits-by-organization-id';

export function useOrganizationMessageCredits() {
  const organizationQuery = useCurrentOrganization();

  return useSelectMessageCreditsByOrganizationId(
    {
      organizationId: organizationQuery.data?.id!,
    },
    { enabled: !!organizationQuery.data?.id }
  );
}
