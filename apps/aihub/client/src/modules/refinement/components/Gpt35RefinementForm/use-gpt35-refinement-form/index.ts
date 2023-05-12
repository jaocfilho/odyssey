import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  gpt35RefinementSchema,
  type Gpt35RefinementFormData,
} from '../Inputs/schema';

type UseGpt35RefinementFormProps = {
  onSubmit: SubmitHandler<Gpt35RefinementFormData>;
};

export type UseGpt35RefinementFormMethods =
  UseFormReturn<Gpt35RefinementFormData>;

export function useGpt35RefinementForm({
  onSubmit,
}: UseGpt35RefinementFormProps) {
  const methods = useForm<Gpt35RefinementFormData>({
    resolver: zodResolver(gpt35RefinementSchema),
  });

  const submit = methods.handleSubmit(onSubmit);

  const resetOnSuccessSubmit = () => {
    const { reset, formState } = methods;
    if (formState.isSubmitSuccessful) {
      reset();
    }
  };

  const submitGpt35RefinementForm = () => {
    submit();
    resetOnSuccessSubmit();
  };

  const customMethods = { submitGpt35RefinementForm };

  return { methods, customMethods };
}
