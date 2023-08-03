'use client';

import { Button } from 'tailwind-ui';
import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { NewDocumentsListItemProps } from '@/modules/documents/components/NewDocumentsList/NewDocumentsListItem';
import { useTrainChatbot } from '@/modules/documents/hooks/use-train-chatbot';
import { Documents } from '@/modules/documents/entities';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

type ContentProps = {
  items: NewDocumentsListItemProps[];
  resetDocuments: () => void;
  chatbotId: string;
  documents: Documents;
};

export function Content({
  items,
  resetDocuments,
  chatbotId,
  documents,
}: ContentProps) {
  const mutation = useTrainChatbot();
  const { redirectToChatbotDataSource } = useNavigation();

  const handleClick = () => {
    mutation.mutate(
      { chatbotId, documents },
      {
        onSuccess: () => redirectToChatbotDataSource(chatbotId),
      }
    );
  };

  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <NewDocumentsList items={items} />
      <div className="flex self-end mt-6 gap-4">
        <Button colorScheme="gray" onClick={resetDocuments}>
          Cancel
        </Button>
        <Button onClick={handleClick}>Train chatbot</Button>
      </div>
    </div>
  );
}
