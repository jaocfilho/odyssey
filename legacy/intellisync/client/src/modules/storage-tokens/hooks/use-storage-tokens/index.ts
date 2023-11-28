import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectStorageTokensByOrganizationId,
  type BaseSelectStorageTokensByOrganizationIdParams,
} from '../../api/base';
import { organizationsQueryKeys } from '@/modules/organizations/query-keys';
import { useQuery } from '@tanstack/react-query';
import { useCurrentOrganization } from '@/modules/organizations/hooks/use-current-organization';

function useBaseSelectStorageTokensByOrganizationId() {
  const { supabase } = useSupabase();

  const selectStorageTokensByOrganizationId = async ({
    organizationId,
  }: BaseSelectStorageTokensByOrganizationIdParams) => {
    return await baseSelectStorageTokensByOrganizationId(
      {
        organizationId,
      },
      supabase
    );
  };

  return { selectStorageTokensByOrganizationId };
}

type UseSelectStorageTokensByOrganizationIdOptions = {
  enabled?: boolean;
};

function useSelectStorageTokensByOrganizationId(
  { organizationId }: BaseSelectStorageTokensByOrganizationIdParams,
  options?: UseSelectStorageTokensByOrganizationIdOptions
) {
  const { selectStorageTokensByOrganizationId } =
    useBaseSelectStorageTokensByOrganizationId();

  const queryKey = organizationsQueryKeys.storageTokens(organizationId);
  const queryFn = async () => {
    const { data } = await selectStorageTokensByOrganizationId({
      organizationId,
    });
    return data;
  };

  return useQuery({ queryKey, queryFn, enabled: options?.enabled });
}

export function useStorageTokens() {
  const organizationQuery = useCurrentOrganization();

  return useSelectStorageTokensByOrganizationId(
    {
      organizationId: organizationQuery.data?.id!,
    },
    { enabled: !!organizationQuery.data?.id }
  );
}
