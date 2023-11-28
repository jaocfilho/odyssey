import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormOnSubmit,
} from '@/modules/forms/hooks/use-custom-form';
import { chatbotSchema } from '../inputs/schema';

type UseChatbotFormProps = {
  onSubmit: UseCustomFormOnSubmit<typeof chatbotSchema>;
};

export type UseChatbotFormMethods = UseCustomFormMethods<typeof chatbotSchema>;

export function useChatbotForm({ onSubmit }: UseChatbotFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: chatbotSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
