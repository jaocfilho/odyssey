import { createServerSupabase } from '@/lib/supabase/server';
import {
  baseSelectAppById,
  type BaseSelectAppByIdParams,
  baseGetAppById,
  type BaseGetAppByIdParams,
  baseSelectGpt35AppRefinement,
  BaseSelectGpt35AppRefinementParams,
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

type ServerSelectGpt35AppRefinementParams = BaseSelectGpt35AppRefinementParams;

export async function serverSelectGpt35AppRefinement({
  appId,
}: ServerSelectGpt35AppRefinementParams) {
  const supabase = createServerSupabase();

  return await baseSelectGpt35AppRefinement({ appId }, supabase);
}
