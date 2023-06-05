import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormOnSubmit,
  type UseCustomFormProps,
} from '@/modules/forms/hooks/use-custom-form';
import { chatbotSettingsSchema } from '../inputs/schema';

type UseChatbotSettingsFormProps = Pick<
  UseCustomFormProps<typeof chatbotSettingsSchema>,
  'defaultValues'
> & {
  onSubmit: UseCustomFormOnSubmit<typeof chatbotSettingsSchema>;
};

export type UseChatbotSettingsFormMethods = UseCustomFormMethods<
  typeof chatbotSettingsSchema
>;

export function useChatbotSettingsForm({
  onSubmit,
  defaultValues,
}: UseChatbotSettingsFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: chatbotSettingsSchema,
    onSubmit,
    defaultValues,
  });

  return { methods, customMethods };
}
