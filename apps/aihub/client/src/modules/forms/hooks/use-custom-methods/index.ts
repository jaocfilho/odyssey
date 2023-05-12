import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type UseCustomMethodsProps<FormValues extends FieldValues> = {
  methods: UseFormReturn<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
};

export function useCustomMethods<FormValues extends FieldValues>({
  methods,
  onSubmit,
}: UseCustomMethodsProps<FormValues>) {
  const submit = methods.handleSubmit(onSubmit);

  const submitForm = () => {
    submit();
  };

  const customMethods = { submitForm };

  return { customMethods };
}
