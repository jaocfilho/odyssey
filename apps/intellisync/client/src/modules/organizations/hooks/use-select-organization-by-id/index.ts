import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectOrganizationById,
  type BaseSelectOrganizationByIdParams,
} from '../../api/base';

type SelectOrganizationByIdParams = BaseSelectOrganizationByIdParams;

export function useBaseSelectOrganizationById() {
  const { supabase } = useSupabase();

  const selectOrganizationById = async ({
    id,
  }: SelectOrganizationByIdParams) => {
    return await baseSelectOrganizationById({ id }, supabase);
  };

  return { selectOrganizationById };
}
