import { useFormContext, get, FieldErrors, FieldValues } from 'react-hook-form';

type UseFieldErrorProps = {
  name: string;
};

export const useFieldError = ({ name }: UseFieldErrorProps) => {
  const { formState } = useFormContext();
  const error = get(formState.errors, name) as FieldErrors<FieldValues>;

  return { error };
};
