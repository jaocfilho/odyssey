'use client';

import { Button } from 'tailwind-ui';
import { Documents } from '@/modules/documents/entities';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { TNewDocumentsListItem } from './NewDocumentsListItem';
import { TrainChatbotButton } from '@/modules/documents/components/TrainChatbotButton';
import { DocumentsArea } from './DocumentsArea';

type ContentProps = {
  groupedDocuments: TNewDocumentsListItem[];
  resetDocuments: () => void;
  removeDocuments: (fileName: string) => void;
  chatbotId: string;
  documents: Documents;
};

export function Content({
  groupedDocuments,
  resetDocuments,
  removeDocuments,
  chatbotId,
  documents,
}: ContentProps) {
  const { redirectToChatbotDataSource } = useNavigation();

  const handleSuccess = () => redirectToChatbotDataSource(chatbotId);

  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <DocumentsArea
        removeDocuments={removeDocuments}
        groupedDocuments={groupedDocuments}
      />
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
    </div>
  );
}
