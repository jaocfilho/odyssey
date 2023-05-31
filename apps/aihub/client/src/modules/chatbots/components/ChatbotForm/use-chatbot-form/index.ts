import { UseFormReturn, SubmitHandler } from 'react-hook-form';

import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';
import { type ChatbotFormData, chatbotSchema } from '../inputs/schema';

type UseChatbotFormProps = {
  onSubmit: SubmitHandler<ChatbotFormData>;
};

export type UseChatbotFormMethods = UseFormReturn<ChatbotFormData>;

export function useChatbotForm({ onSubmit }: UseChatbotFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: chatbotSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
