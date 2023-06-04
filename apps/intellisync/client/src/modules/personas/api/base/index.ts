import { baseSelectById } from '@/lib/supabase/api';
import type {
  PersonasInsert,
  PersonasRow,
  Supabase,
} from '@/lib/supabase/types';

export type BaseInsertPersonaParams = Omit<
  PersonasInsert,
  'created_at' | 'updated_at' | 'id'
>;

export async function baseInsertPersona(
  params: BaseInsertPersonaParams,
  supabase: Supabase
) {
  return await supabase
    .from('personas')
    .insert(params)
    .select()
    .limit(1)
    .single();
}

export async function baseSelectAllPersonas(supabase: Supabase) {
  return await supabase.from('personas').select('*');
}

type BaseSelectAllPersonasReturn = Awaited<
  ReturnType<typeof baseSelectAllPersonas>
>;
export type BaseSelectAllPersonasReturnData =
  BaseSelectAllPersonasReturn['data'];

export type BaseSelectPersonaByIdParams = Pick<PersonasRow, 'id'>;

export async function baseSelectPersonaById(
  { id }: BaseSelectPersonaByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id }, 'personas', supabase);
}

type BaseSelectPersonaByIdReturn = Awaited<
  ReturnType<typeof baseSelectPersonaById>
>;
export type BaseSelectPersonaByIdReturnData = NonNullable<
  BaseSelectPersonaByIdReturn['data']
>;