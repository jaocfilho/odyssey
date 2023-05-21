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

export async function baseRefineGpt35OnAppCreation(
  {
    p_app_model,
    p_app_name,
    p_app_description,
    p_gpt_context,
    p_gpt_temperature,
    p_gpt_style,
    p_gpt_answer_size,
    p_gpt_domain,
    p_gpt_informality,
    p_gpt_language_complexity,
    p_gpt_level_of_detail,
    p_gpt_target_audience,
    p_gpt_tone,
    p_gpt_topic,
  }: BaseRefineGpt35OnAppCreationParams,
  supabase: Supabase
) {
  return await supabase.rpc('refine_gpt35_app_on_creation', {
    p_app_model,
    p_app_name,
    p_app_description,
    p_gpt_context,
    p_gpt_temperature,
    p_gpt_style,
    p_gpt_answer_size,
    p_gpt_domain,
    p_gpt_informality,
    p_gpt_language_complexity,
    p_gpt_level_of_detail,
    p_gpt_target_audience,
    p_gpt_tone,
    p_gpt_topic,
  });
}
