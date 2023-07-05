import { useInsertChatbot } from '@/modules/chatbots/hooks/use-insert-chatbot';
import { type ChatbotFormData, useChatbotForm } from '../../ChatbotForm';
import { useProfile } from '@/modules/profiles/hooks/use-profile';

export function useCreateChatbotForm() {
  const mutation = useInsertChatbot();
  const profileQuery = useProfile();

  const onSubmit = (data: ChatbotFormData) => {
    const currentOrganizationId = profileQuery.data?.last_used_organization;

    mutation.mutate({ ...data, organization_id: currentOrganizationId! });
  };

  const { methods } = useChatbotForm({ onSubmit });

  return { methods, onSubmit };
}
