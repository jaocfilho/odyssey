import { type PostgrestSingleResponse } from '@supabase/supabase-js';

import type {
  AppsTableRow,
  AppsTableInsert,
  Supabase,
  DatabaseFunctions,
} from '@/lib/supabase/types';
import { App } from '../../entities';

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

type RefineGpt35OnAppCreationArgs =
  DatabaseFunctions['refine_gpt35_app_on_creation']['Args'];
type BaseRefineGpt35OnAppCreationParams = {
  model: RefineGpt35OnAppCreationArgs['p_app_model'];
  name: RefineGpt35OnAppCreationArgs['p_app_name'];
  description: RefineGpt35OnAppCreationArgs['p_app_description'];
  context: RefineGpt35OnAppCreationArgs['p_gpt_context'];
  temperature: RefineGpt35OnAppCreationArgs['p_gpt_temperature'];
  vibe: RefineGpt35OnAppCreationArgs['p_gpt_vibe'];
};

export async function baseRefineGpt35OnAppCreation(
  {
    model,
    name,
    description,
    context,
    temperature,
    vibe,
  }: BaseRefineGpt35OnAppCreationParams,
  supabase: Supabase
) {
  return await supabase.rpc('refine_gpt35_app_on_creation', {
    p_app_model: model,
    p_app_name: name,
    p_app_description: description,
    p_gpt_context: context,
    p_gpt_temperature: temperature,
    p_gpt_vibe: vibe,
  });
}

type GetGpt35AppWithRefinement =
  DatabaseFunctions['get_gpt35_app_with_refinement']['Args'];
export type BaseGetAppByIdParams = {
  id: GetGpt35AppWithRefinement['p_app_id'];
};

export async function baseGetAppById(
  { id }: BaseGetAppByIdParams,
  supabase: Supabase
): Promise<PostgrestSingleResponse<App>> {
  return (await supabase.rpc('get_gpt35_app_with_refinement', {
    p_app_id: id,
  })) as PostgrestSingleResponse<App>;
}
