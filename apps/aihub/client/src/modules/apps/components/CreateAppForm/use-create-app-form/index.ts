import { createAppFormSchema } from '../Inputs/schema';
import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormProps,
} from '@/modules/forms/hooks/use-custom-form';

type UseCreateAppFormProps = Pick<
  UseCustomFormProps<typeof createAppFormSchema>,
  'onSubmit'
>;

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
