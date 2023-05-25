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
  {
    name,
    description,
    answer_size,
    context,
    domain,
    informality,
    language_complexity,
    level_of_detail,
    style,
    target_audience,
    temperature,
    tone,
    topic,
  }: BaseInsertPersonaParams,
  supabase: Supabase
) {
  return await supabase
    .from('personas')
    .insert({
      name,
      description,
      answer_size,
      context,
      domain,
      informality,
      language_complexity,
      level_of_detail,
      style,
      target_audience,
      temperature,
      tone,
      topic,
    })
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
  const response = await supabase
    .from('personas')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();

  return response;
}
