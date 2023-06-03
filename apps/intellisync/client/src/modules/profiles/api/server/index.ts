import { createServerSupabase } from '@/lib/supabase/server';
import {
  type BaseSelectProfileByIdParams,
  baseSelectProfileById,
} from '../base';

type ServerSelectProfileByIdParams = BaseSelectProfileByIdParams;

export async function serverSelectProfileById({
  id,
}: ServerSelectProfileByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectProfileById({ id }, supabase);
}
