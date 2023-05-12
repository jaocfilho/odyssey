import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type CreateAppFormData, createAppFormSchema } from '../Inputs/schema';

type UseCreateAppFormProps = {
  onSubmit: SubmitHandler<CreateAppFormData>;
};

export type UseCreateAppFormMethods = UseFormReturn<CreateAppFormData>;

export function useCreateAppForm({ onSubmit }: UseCreateAppFormProps) {
  const methods = useForm<CreateAppFormData>({
    resolver: zodResolver(createAppFormSchema),
  });

  const submit = methods.handleSubmit(onSubmit);

  const resetOnSuccessSubmit = () => {
    const { reset, formState } = methods;
    if (formState.isSubmitSuccessful) {
      reset();
    }
  };

  const submitCreateAppForm = () => {
    submit();
    resetOnSuccessSubmit();
  };

  const customMethods = { submitCreateAppForm };

  return { methods, customMethods };
}
