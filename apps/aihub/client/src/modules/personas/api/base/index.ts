import type { PersonasInsert, Supabase } from '@/lib/supabase/types';

export type BaseInsertPersonaParams = Omit<
  PersonasInsert,
  'created_at' | 'updated_at' | 'id'
>;

export async function baseInsertPersona(
  {
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
