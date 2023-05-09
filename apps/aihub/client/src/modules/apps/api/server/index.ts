import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectAppById, type BaseSelectAppByIdParams } from '../base';

type ServerSelectAppByIdParams = BaseSelectAppByIdParams;

export async function serverSelectAppById({ id }: ServerSelectAppByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectAppById({ id }, supabase);
}
