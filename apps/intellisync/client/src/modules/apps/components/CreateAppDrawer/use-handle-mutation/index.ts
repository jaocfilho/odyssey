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
  const [appFormData, setAppFormData] = useState<CreateAppFormData | undefined>(
    undefined
  );
  const [refinementFormData, setRefinementFormData] = useState<
    Gpt35RefinementFormData | undefined
  >(undefined);

  const addRefinementToParams = (newValue: Gpt35RefinementFormData) =>
    setRefinementFormData(newValue);

  const addAppToParams = (newValue: CreateAppFormData) =>
    setAppFormData(newValue);

  const handleMutation = () => {
    onMutate({ ...appFormData!, ...refinementFormData });
  };

  return {
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
