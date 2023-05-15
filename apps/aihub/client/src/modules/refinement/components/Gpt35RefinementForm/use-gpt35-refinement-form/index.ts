import { UseFormReturn, SubmitHandler } from 'react-hook-form';

import {
  gpt35RefinementSchema,
  type Gpt35RefinementFormData,
} from '../Inputs/schema';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';
import { useCreateGpt35RefinementMutation } from '@/modules/refinement/hooks/use-create-gpt35-refinement-mutation';

type UseGpt35RefinementFormProps = {
  onSubmit: SubmitHandler<Gpt35RefinementFormData>;
};

export type UseGpt35RefinementFormMethods =
  UseFormReturn<Gpt35RefinementFormData>;

export function useGpt35RefinementForm({
  onSubmit,
}: UseGpt35RefinementFormProps) {
  useCreateGpt35RefinementMutation();

  const { methods, customMethods } = useCustomForm({
    schema: gpt35RefinementSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
