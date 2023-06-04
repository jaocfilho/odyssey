import { useInsertChatbot } from '@/modules/chatbots/hooks/use-insert-chatbot';
import { type ChatbotFormData, useChatbotForm } from '../../ChatbotForm';
import { getCurrentOrganization } from '@/modules/organizations/helpers';

export function useCreateChatbotForm() {
  const mutation = useInsertChatbot();
  const organization = getCurrentOrganization();

  const onSubmit = (data: ChatbotFormData) => {
    mutation.mutate({ ...data, organization_id: organization!.id });
  };

  const { methods } = useChatbotForm({ onSubmit });

  return { methods, onSubmit };
}
