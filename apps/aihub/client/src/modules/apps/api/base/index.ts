import type {
  AppsTableRow,
  AppsTableInsert,
  Supabase,
  DatabaseFunctions,
} from '@/lib/supabase/types';

export type BaseSelectAppByIdParams = Pick<AppsTableRow, 'id'>;

export async function baseSelectAppById(
  { id }: BaseSelectAppByIdParams,
  supabase: Supabase
) {
  const response = await supabase
    .from('apps')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();

  return response;
}

type BaseSelectAppByIdReturn = Awaited<ReturnType<typeof baseSelectAppById>>;
export type SelectAppByIdReturnData = BaseSelectAppByIdReturn['data'];

export async function baseSelectAllApps(supabase: Supabase) {
  return await supabase.from('apps').select('*');
}

export type BaseInsertAppParams = Pick<
  AppsTableInsert,
  'name' | 'model' | 'description'
>;

export async function baseInsertApp(
  { name, model, description }: BaseInsertAppParams,
  supabase: Supabase
) {
  const response = await supabase
    .from('apps')
    .insert([
      {
        name,
        model,
        description,
      },
    ])
    .select()
    .limit(1)
    .single();

  return response;
}

export type InsertAppReturn = Awaited<ReturnType<typeof baseInsertApp>>;

type RefineGpt35OnAppCreationParams =
  DatabaseFunctions['refine_gpt35_app_on_creation']['Args'];

export async function refineGpt35OnAppCreation(
  {
    p_app_model,
    p_app_name,
    p_app_description,
    p_gpt_context,
    p_gpt_temperature,
    p_gpt_vibe,
  }: RefineGpt35OnAppCreationParams,
  supabase: Supabase
) {
  return await supabase.rpc('refine_gpt35_app_on_creation', {
    p_app_model,
    p_app_name,
    p_app_description,
    p_gpt_context,
    p_gpt_temperature,
    p_gpt_vibe,
  });
}
