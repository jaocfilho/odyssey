import { type ChatbotFormData, useChatbotForm } from '../../ChatbotForm';

export function useCreateChatbotForm() {
  const onSubmit = (data: ChatbotFormData) => {
    console.log(data);
  };

  const { methods } = useChatbotForm({ onSubmit });

  return { methods, onSubmit };
}
