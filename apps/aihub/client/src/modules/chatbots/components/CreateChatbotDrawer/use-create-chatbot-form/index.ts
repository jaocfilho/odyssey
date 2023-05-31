import { useInsertChatbot } from '@/modules/chatbots/hooks/use-insert-chatbot';
import { type ChatbotFormData, useChatbotForm } from '../../ChatbotForm';

export function useCreateChatbotForm() {
  const mutation = useInsertChatbot();

  const onSubmit = (data: ChatbotFormData) => {
    mutation.mutate(data);
  };

  const { methods } = useChatbotForm({ onSubmit });

  return { methods, onSubmit };
}
