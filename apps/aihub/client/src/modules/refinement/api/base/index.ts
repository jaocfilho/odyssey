import type {
  Gpt35RefinementRow,
  Gpt35RefinementInsert,
  Supabase,
} from '@/lib/supabase/types';

export type BaseInsertGpt35RefinementParams = Pick<
  Gpt35RefinementInsert,
  'app' | 'context' | 'temperature' | 'vibe'
>;

export async function baseInsertGpt35Refinement(
  { app, context, temperature, vibe }: BaseInsertGpt35RefinementParams,
  supabase: Supabase
) {
  const response = await supabase
    .from('gpt3_5_refinement')
    .insert([{ app, context, temperature, vibe }])
    .select()
    .limit(1)
    .single();

  return response;
}

export type InsertGpt35RefinementReturn = Awaited<
  ReturnType<typeof baseInsertGpt35Refinement>
>;
