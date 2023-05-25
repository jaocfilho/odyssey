import { createServerSupabase } from '@/lib/supabase/server';
import {
  baseSelectAllPersonas,
  baseSelectPersonaById,
  type BaseSelectPersonaByIdParams,
} from '../base';

export async function serverSelectAllPersonas() {
  const supabase = createServerSupabase();

  return await baseSelectAllPersonas(supabase);
}

type ServerSelectPersonaByIdParams = BaseSelectPersonaByIdParams;

export async function serverSelectPersonaById({
  id,
}: ServerSelectPersonaByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectPersonaById({ id }, supabase);
}
