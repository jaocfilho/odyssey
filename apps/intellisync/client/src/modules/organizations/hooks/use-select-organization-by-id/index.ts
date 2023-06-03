import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectOrganizationById,
  type BaseSelectOrganizationByIdParams,
  type BaseSelectOrganizationByIdReturnData,
} from '../../api/base';
import { organizationsQueryKeys } from '../../query-keys';

export function useBaseSelectOrganizationById() {
  const { supabase } = useSupabase();

  const selectOrganizationById = async ({
    id,
  }: BaseSelectOrganizationByIdParams) => {
    return await baseSelectOrganizationById({ id }, supabase);
  };

  return { selectOrganizationById };
}

type UseSelectOrganizationByIdParams = BaseSelectOrganizationByIdParams;

type UseSelectOrganizationByIdOptions = {
  initialData?: BaseSelectOrganizationByIdReturnData;
};

export function useSelectOrganizationById(
  { id }: UseSelectOrganizationByIdParams,
  options?: UseSelectOrganizationByIdOptions
) {
  const { selectOrganizationById } = useBaseSelectOrganizationById();

  const queryKey = organizationsQueryKeys.organization(id);
  const queryFn = async () => {
    const { data } = await selectOrganizationById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
