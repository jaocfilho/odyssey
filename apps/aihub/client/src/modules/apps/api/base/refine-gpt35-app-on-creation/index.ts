import { addPrefixToKeys, extractKeysFromObject } from '@odyssey/objects';
import { type DatabaseFunctions, type Supabase } from '@/lib/supabase/types';

type RefineGpt35OnAppCreationArgs =
  DatabaseFunctions['refine_gpt35_app_on_creation']['Args'];

// Extracts both "p_app_" and "p_gpt_" prefix from args.
export type BaseRefineGpt35OnAppCreationParams = {
  [K in keyof RefineGpt35OnAppCreationArgs as RefineGpt35OnAppCreationArgs[K] extends undefined
    ? K
    : K extends `p_app_${infer U}`
    ? U
    : K extends `p_gpt_${infer V}`
    ? V
    : K]: RefineGpt35OnAppCreationArgs[K];
};

export function addAppPrefix(obj: BaseRefineGpt35OnAppCreationParams) {
  const keysToPrefix = extractKeysFromObject(obj, [
    'name',
    'model',
    'description',
  ]);

  return addPrefixToKeys('p_app_', keysToPrefix);
}

export function addGptPrefix(obj: BaseRefineGpt35OnAppCreationParams) {
  const keysToPrefix = extractKeysFromObject(obj, [
    'context',
    'temperature',
    'style',
    'domain',
    'target_audience',
    'topic',
    'level_of_detail',
    'tone',
    'language_complexity',
    'informality',
    'answer_size',
  ]);

  return addPrefixToKeys('p_gpt_', keysToPrefix);
}

export function addPrefix(
  obj: BaseRefineGpt35OnAppCreationParams
): RefineGpt35OnAppCreationArgs {
  const appParams = addAppPrefix(obj);
  const gptParams = addGptPrefix(obj);

  return { ...appParams, ...gptParams } as RefineGpt35OnAppCreationArgs;
}

export async function baseRefineGpt35OnAppCreation(
  params: BaseRefineGpt35OnAppCreationParams,
  supabase: Supabase
) {
  const formatedParams = addPrefix(params);

  return await supabase.rpc('refine_gpt35_app_on_creation', formatedParams);
}
