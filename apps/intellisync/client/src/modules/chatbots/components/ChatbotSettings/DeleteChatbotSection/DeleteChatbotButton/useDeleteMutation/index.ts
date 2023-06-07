import { useDeleteChatbotById } from '@/modules/chatbots/hooks/use-delete-chatbot-by-id';

export function useDeleteMutation(id: string) {
  const deleteMutation = useDeleteChatbotById();
  const deleteChatbot = () => {
    deleteMutation.mutate({ id });
  };

  return { deleteChatbot };
}
