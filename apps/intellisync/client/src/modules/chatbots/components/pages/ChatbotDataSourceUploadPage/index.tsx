'use client';

import { groupArrayBy } from '@odyssey/arrays';
import { useArrayState } from '@odyssey/react-hooks';
import { Document } from '@/modules/documents/entities';
import { EmptyPage } from './EmptyPage';
import { Content } from './Content';

function groupDocuments(documents: Document[]) {
  const groupedDocuments = groupArrayBy(
    documents,
    (d) => d.metadata.essential.fileName
  );

  return Object.entries(groupedDocuments).map(([fileName, documents]) => ({
    characters: documents.reduce(
      (acc, document) => acc + document.metadata.essential.characters,
      0
    ),
    fileName,
  }));
}

type ChatbotDataSourceUploadPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourceUploadPage({
  chatbotId,
}: ChatbotDataSourceUploadPageProps) {
  const [documents, controller] = useArrayState<Document>();

  const resetDocuments = () => controller.clear();

  const groupedDocuments = groupDocuments(documents);
  const isEmpty = groupedDocuments.length === 0;

  return (
    <>
      {isEmpty ? (
        <EmptyPage chatbotId={chatbotId} onUpload={controller.set} />
      ) : (
        <Content
          chatbotId={chatbotId}
          items={groupedDocuments}
          resetDocuments={resetDocuments}
          removeDocument={controller.removeByIndex}
          documents={documents}
        />
      )}
    </>
  );
}
