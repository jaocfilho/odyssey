import { createAppFormSchema } from '../Inputs/schema';
import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormOnSubmit,
} from '@/modules/forms/hooks/use-custom-form';

type UseCreateAppFormProps = {
  onSubmit: UseCustomFormOnSubmit<typeof createAppFormSchema>;
};

export type UseCreateAppFormMethods = UseCustomFormMethods<
  typeof createAppFormSchema
>;

export function useCreateAppForm({ onSubmit }: UseCreateAppFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: createAppFormSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
