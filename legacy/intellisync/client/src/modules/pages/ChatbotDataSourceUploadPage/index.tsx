'use client';

import { EmptyPage } from './EmptyPage';
import { Content } from './Content';
import { useGroupedDocuments } from '@/modules/documents/hooks/use-grouped-documents';

type ChatbotDataSourceUploadPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourceUploadPage({
  chatbotId,
}: ChatbotDataSourceUploadPageProps) {
  const {
    documents,
    groupedDocuments,
    removeDocuments,
    resetDocuments,
    setDocuments,
  } = useGroupedDocuments();

  const isEmpty = groupedDocuments.length === 0;

  return (
    <>
      {isEmpty ? (
        <EmptyPage chatbotId={chatbotId} onUpload={setDocuments} />
      ) : (
        <Content
          groupedDocuments={groupedDocuments}
          resetDocuments={resetDocuments}
          removeDocuments={removeDocuments}
          documents={documents}
        />
      )}
    </>
  );
}
