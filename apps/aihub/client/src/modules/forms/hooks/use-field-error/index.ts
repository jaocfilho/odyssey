import { useFormContext, get } from 'react-hook-form';

type UseFieldErrorProps = {
  name: string;
};

export const useFieldError = ({ name }: UseFieldErrorProps) => {
  const { formState } = useFormContext();
  const error = get(formState.errors, name);

  return { error };
};
