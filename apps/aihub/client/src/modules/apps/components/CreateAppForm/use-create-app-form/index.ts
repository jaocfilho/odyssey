import { useCreateAppMutation } from '@/modules/apps/hooks/use-create-app-mutation';
import { createAppFormSchema, type CreateAppFormData } from '../Inputs/schema';
import {
  useCustomForm,
  type UseCustomFormMethods,
} from '@/modules/forms/hooks/use-custom-form';
import { InsertAppReturn } from '@/modules/apps/api/base';

export type UseCreateAppFormMethods = UseCustomFormMethods<
  typeof createAppFormSchema
>;

type UseCreateAppFormOptions = {
  handleSuccess: (data: InsertAppReturn) => void;
};

export function useCreateAppForm({ handleSuccess }: UseCreateAppFormOptions) {
  const mutation = useCreateAppMutation();

  const createApp = ({ name, model, description }: CreateAppFormData) => {
    mutation.mutate(
      { name, model, description },
      {
        onSuccess: (data) => {
          handleSuccess(data);
        },
      }
    );
  };

  const { methods, customMethods } = useCustomForm({
    schema: createAppFormSchema,
    onSubmit: createApp,
  });

  return { methods, customMethods };
}
