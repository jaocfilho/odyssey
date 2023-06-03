import { SubmitHandler } from 'react-hook-form';

import { createAppFormSchema, type CreateAppFormData } from '../Inputs/schema';
import {
  useCustomForm,
  type UseCustomFormMethods,
} from '@/modules/forms/hooks/use-custom-form';

export type UseCreateAppFormMethods = UseCustomFormMethods<
  typeof createAppFormSchema
>;

type UseCreateAppFormProps = {
  onSubmit: SubmitHandler<CreateAppFormData>;
};

export function useCreateAppForm({ onSubmit }: UseCreateAppFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: createAppFormSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
