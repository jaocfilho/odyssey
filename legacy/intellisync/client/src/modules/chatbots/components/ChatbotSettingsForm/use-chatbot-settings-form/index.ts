import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormProps,
} from '@/modules/forms/hooks/use-custom-form';
import { chatbotSettingsSchema } from '../inputs/schema';
export { type ChatbotSettingsFormData } from '../inputs/schema';

type UseChatbotSettingsFormProps = Pick<
  UseCustomFormProps<typeof chatbotSettingsSchema>,
  'defaultValues'
>;

export type UseChatbotSettingsFormMethods = UseCustomFormMethods<
  typeof chatbotSettingsSchema
>;

export function useChatbotSettingsForm({
  defaultValues,
}: UseChatbotSettingsFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: chatbotSettingsSchema,
    defaultValues,
  });

  return { methods, customMethods };
}
