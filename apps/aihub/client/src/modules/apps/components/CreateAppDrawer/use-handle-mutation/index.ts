import { useState } from 'react';

import {
  useRefineGpt35AppOnCreation,
  type RefineGpt35OnAppCreationParams,
} from '@/modules/apps/hooks/use-refine-gpt35-app-on-creation';
import { CreateAppFormData } from '../../CreateAppForm/Inputs/schema';
import { Gpt35RefinementFormData } from '../../Gpt35RefinementForm/Inputs/schema';

type UseBaseHandleMutationProps = {
  onMutate: (mutationParams: RefineGpt35OnAppCreationParams) => void;
};

export function useBaseHandleMutation({
  onMutate,
}: UseBaseHandleMutationProps) {
  const [mutationParams, setMutationParams] =
    useState<RefineGpt35OnAppCreationParams | null>(null);

  const addRefinementToParams = ({
    temperature,
    style,
  }: Gpt35RefinementFormData) => {
    setMutationParams((oldValue) => {
      return {
        ...oldValue!,
        p_gpt_temperature: temperature,
        p_gpt_style: style,
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
