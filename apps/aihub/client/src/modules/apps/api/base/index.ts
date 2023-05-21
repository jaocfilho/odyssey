import { type PostgrestSingleResponse } from '@supabase/supabase-js';

import type {
  AppsTableRow,
  AppsTableInsert,
  Supabase,
  DatabaseFunctions,
} from '@/lib/supabase/types';
import { App } from '../../entities';

export {
  baseRefineGpt35OnAppCreation,
  type BaseRefineGpt35OnAppCreationParams,
} from './refine-gpt35-app-on-creation';

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

export type BaseSelectGpt35AppRefinementParams = {
  appId: string;
};

export async function baseSelectGpt35AppRefinement(
  { appId }: BaseSelectGpt35AppRefinementParams,
  supabase: Supabase
) {
  return await supabase
    .from('gpt35_refinements')
    .select('*')
    .eq('app', appId)
    .limit(1)
    .single();
}
