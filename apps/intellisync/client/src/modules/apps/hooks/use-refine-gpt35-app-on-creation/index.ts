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
    model,
    name,
    description,
    context,
    temperature,
    style,
    answer_size,
    domain,
    informality,
    language_complexity,
    level_of_detail,
    target_audience,
    tone,
    topic,
  }: RefineGpt35OnAppCreationParams) => {
    return await baseRefineGpt35OnAppCreation(
      {
        model,
        name,
        description,
        context,
        temperature,
        style,
        answer_size,
        domain,
        informality,
        language_complexity,
        level_of_detail,
        target_audience,
        tone,
        topic,
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
