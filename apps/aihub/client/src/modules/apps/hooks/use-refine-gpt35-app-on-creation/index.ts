import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseRefineGpt35OnAppCreation,
  type BaseRefineGpt35OnAppCreationParams,
} from '../../api/base';
import { invalidateAllAppsQuery } from '../../helpers';

export type RefineGpt35OnAppCreationParams = BaseRefineGpt35OnAppCreationParams;

export function useBaseRefineGpt35AppOnCreation() {
  const { supabase } = useSupabase();

  const refineGpt35OnAppCreation = async ({
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
  }: RefineGpt35OnAppCreationParams) => {
    return await baseRefineGpt35OnAppCreation(
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
      },
      supabase
    );
  };

  return { refineGpt35OnAppCreation };
}

export function useRefineGpt35AppOnCreation() {
  const { refineGpt35OnAppCreation } = useBaseRefineGpt35AppOnCreation();

  return useMutation({
    mutationFn: refineGpt35OnAppCreation,
    onSuccess: () => {
      invalidateAllAppsQuery();
    },
  });
}
