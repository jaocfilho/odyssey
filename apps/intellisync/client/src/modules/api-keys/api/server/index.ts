import { createServerSupabase } from '@/lib/supabase/server';
import {
  baseSelectApikeyByOrganizationId,
  type BaseSelectApikeyByOrganizationIdParams,
} from '../base';

export async function serverSelectApikeyByOrganizationId({
  organization_id,
}: BaseSelectApikeyByOrganizationIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectApikeyByOrganizationId({ organization_id }, supabase);
}
