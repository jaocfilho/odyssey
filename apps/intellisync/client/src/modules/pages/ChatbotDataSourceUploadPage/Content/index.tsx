'use client';

import { Button } from 'tailwind-ui';
import { NewDocumentsList } from './NewDocumentsList';
import { useTrainChatbot } from '@/modules/documents/hooks/use-train-chatbot';
import { Documents } from '@/modules/documents/entities';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { TokenCheckoutArea } from './TokenCheckoutArea';
import { TNewDocumentsListItem } from './NewDocumentsListItem';

type ContentProps = {
  items: TNewDocumentsListItem[];
  resetDocuments: () => void;
  removeDocuments: (fileName: string) => void;
  chatbotId: string;
  documents: Documents;
};

export function Content({
  items,
  resetDocuments,
  removeDocuments,
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
      <div className="flex flex-col h-full divide-y dark:divide-white/5">
        <NewDocumentsList removeDocuments={removeDocuments} items={items} />
        <div>
          <TokenCheckoutArea items={items} />
        </div>
      </div>
      <div className="flex self-end mt-6 gap-4">
        <Button colorScheme="gray" onClick={resetDocuments}>
          Cancel
        </Button>
        <Button onClick={handleClick}>Train chatbot</Button>
      </div>
    </div>
  );
}
