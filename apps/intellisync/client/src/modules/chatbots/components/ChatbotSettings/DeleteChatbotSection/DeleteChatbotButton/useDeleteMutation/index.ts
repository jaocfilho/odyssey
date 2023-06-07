import { useDeleteChatbotById } from '@/modules/chatbots/hooks/use-delete-chatbot-by-id';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

export function useDeleteMutation(id: string) {
  const { redirectToChatbots } = useNavigation();

  const deleteMutation = useDeleteChatbotById();
  const deleteChatbot = () => {
    deleteMutation.mutate(
      { id },
      {
        onSuccess: () => redirectToChatbots(),
      }
    );
  };

  return { deleteChatbot };
}
