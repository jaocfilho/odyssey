import { useState } from 'react';

import {
  useRefineGpt35AppOnCreation,
  type RefineGpt35OnAppCreationParams,
} from '@/modules/apps/hooks/use-refine-gpt35-app-on-creation';
import { CreateAppFormData } from '../../CreateAppForm/Inputs/schema';
import { Gpt35RefinementFormData } from '../../Gpt35RefinementForm/Inputs/schema';

type RefinementParams = Omit<
  RefineGpt35OnAppCreationParams,
  'p_app_name' | 'p_app_model' | 'p_app_description'
>;

type Gpt35RefinementFormDataKeys = keyof Gpt35RefinementFormData;

export function formatFormData(
  refinementFormData: Gpt35RefinementFormData
): RefinementParams {
  const refinementParams: RefinementParams = {};
  const keys = Object.keys(refinementFormData) as Gpt35RefinementFormDataKeys[];

  keys.map((key) => {
    const formattedKey = `p_gpt_${key}` as const;
    const value = refinementFormData[
      key
    ] as RefinementParams[typeof formattedKey];

    Object.defineProperty(refinementParams, formattedKey, { value });
  });

  return refinementParams;
}

type UseBaseHandleMutationProps = {
  onMutate: (mutationParams: RefineGpt35OnAppCreationParams) => void;
};

export function useBaseHandleMutation({
  onMutate,
}: UseBaseHandleMutationProps) {
  const [mutationParams, setMutationParams] =
    useState<RefineGpt35OnAppCreationParams | null>(null);

  const addRefinementToParams = (
    refinementFormData: Gpt35RefinementFormData
  ) => {
    const formatedParams = formatFormData(refinementFormData);

    setMutationParams((oldValue) => {
      return {
        ...oldValue!,
        ...formatedParams,
      };
    });
  };

  const addAppToParams = ({ model, name, description }: CreateAppFormData) => {
    setMutationParams((oldValue) => {
      return {
        ...oldValue!,
        p_app_model: model,
        p_app_name: name,
        p_app_description: description,
      };
    });
  };

  const handleMutation = () => {
    if (mutationParams !== null) {
      onMutate(mutationParams);
    }
  };

  return {
    mutationParams,
    addRefinementToParams,
    addAppToParams,
    handleMutation,
  };
}

export function useHandleMutation() {
  const mutation = useRefineGpt35AppOnCreation();

  const { addAppToParams, addRefinementToParams, handleMutation } =
    useBaseHandleMutation({
      onMutate: (params) => mutation.mutate(params),
    });

  return { addRefinementToParams, addAppToParams, handleMutation };
}
