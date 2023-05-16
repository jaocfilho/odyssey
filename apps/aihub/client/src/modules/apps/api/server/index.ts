import { createServerSupabase } from '@/lib/supabase/server';
import {
  baseSelectAppById,
  type BaseSelectAppByIdParams,
  baseGetAppById,
  type BaseGetAppByIdParams,
} from '../base';

type ServerSelectAppByIdParams = BaseSelectAppByIdParams;

export async function serverSelectAppById({ id }: ServerSelectAppByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectAppById({ id }, supabase);
}

type ServerGetAppByIdParams = BaseGetAppByIdParams;

export async function serverGetAppById({ id }: ServerGetAppByIdParams) {
  const supabase = createServerSupabase();

  return await baseGetAppById({ id }, supabase);
}
