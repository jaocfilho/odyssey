'use client';

import { Button } from 'tailwind-ui';
import { TrainChatbotButton } from '@/modules/documents/components/TrainChatbotButton';
import { Documents } from '@/modules/documents/entities';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { useGetCurrentChatbotId } from '@/modules/chatbots/hooks/use-get-current-chatbot-id';

type ButtonsAreaProps = {
  resetDocuments: () => void;
  documents: Documents;
};

export function ButtonsArea({ documents, resetDocuments }: ButtonsAreaProps) {
  const { redirectToChatbotDataSource } = useNavigation();
  const { chatbotId } = useGetCurrentChatbotId();

  const handleSuccess = () => redirectToChatbotDataSource(chatbotId);

  return (
    <div className="flex self-end mt-6 gap-4">
      <Button colorScheme="gray" onClick={resetDocuments}>
        Cancel
      </Button>
      <TrainChatbotButton
        chatbotId={chatbotId}
        documents={documents}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
