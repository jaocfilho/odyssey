import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectMessageCreditsByOrganizationId,
  type BaseSelectMessageCreditsByOrganizationIdParams,
} from '../../api/base';
import { organizationsQueryKeys } from '@/modules/organizations/query-keys';
import { useQuery } from '@tanstack/react-query';

export function useBaseSelectMessageCreditsByOrganizationId() {
  const { supabase } = useSupabase();

  const selectMessageCreditsByOrganizationId = async ({
    organizationId,
  }: BaseSelectMessageCreditsByOrganizationIdParams) => {
    return await baseSelectMessageCreditsByOrganizationId(
      { organizationId },
      supabase
    );
  };

  return { selectMessageCreditsByOrganizationId };
}

export function useSelectMessageCreditsByOrganizationId({
  organizationId,
}: BaseSelectMessageCreditsByOrganizationIdParams) {
  const { selectMessageCreditsByOrganizationId } =
    useBaseSelectMessageCreditsByOrganizationId();

  const queryKey = organizationsQueryKeys.messageCredits(organizationId);
  const queryFn = async () => {
    const { data } = await selectMessageCreditsByOrganizationId({
      organizationId,
    });
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
