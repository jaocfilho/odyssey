import { createServerSupabase } from '@/lib/supabase/server';
import {
  type BaseSelectOrganizationByIdParams,
  baseSelectOrganizationById,
} from '../base';

type ServerSelectOrganizationByIdParams = BaseSelectOrganizationByIdParams;

export async function serverSelectOrganizationById({
  id,
}: ServerSelectOrganizationByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectOrganizationById({ id }, supabase);
}
