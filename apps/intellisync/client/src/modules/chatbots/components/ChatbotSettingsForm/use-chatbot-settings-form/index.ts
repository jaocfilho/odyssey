import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormOnSubmit,
} from '@/modules/forms/hooks/use-custom-form';
import { chatbotSettingsSchema } from '../inputs/schema';

type UseChatbotSettingsFormProps = {
  onSubmit: UseCustomFormOnSubmit<typeof chatbotSettingsSchema>;
};

export type UseChatbotSettingsFormMethods = UseCustomFormMethods<
  typeof chatbotSettingsSchema
>;

export function useChatbotSettingsForm({
  onSubmit,
}: UseChatbotSettingsFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: chatbotSettingsSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
