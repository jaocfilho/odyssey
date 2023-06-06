import { type SubmitHandler, type UseFormReturn } from 'react-hook-form';

import { z } from 'zod';
import { UseCustomFormProps } from '../use-custom-form';

type UseCustomMethodsProps<Schema extends z.ZodTypeAny> = Pick<
  UseCustomFormProps<Schema>,
  'defaultValues'
> & {
  methods: UseFormReturn<z.infer<Schema>>;
  onSubmit?: SubmitHandler<z.infer<Schema>>;
};

export function useCustomMethods<Schema extends z.ZodTypeAny>({
  methods,
  onSubmit,
  defaultValues,
}: UseCustomMethodsProps<Schema>) {
  const submit = methods.handleSubmit((data) => {
    if (!!onSubmit) onSubmit(data);
  });

  const submitForm = () => {
    submit();
  };

  const resetToDefaultValues = () => {
    methods.reset(defaultValues);
  };

  const customMethods = { submitForm, resetToDefaultValues };

  return { customMethods };
}
