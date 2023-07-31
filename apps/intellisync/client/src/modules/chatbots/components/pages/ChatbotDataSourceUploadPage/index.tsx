'use client';

import { useState } from 'react';

import { groupArrayBy } from '@odyssey/arrays';
import { Documents } from '@/modules/documents/entities';
import { FileUploadButton } from '@/modules/documents/components/FileUploadButton';
import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { EmptyPage } from './EmptyPage';

function groupDocuments(documents: Documents) {
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
  const [documents, setDocuments] = useState<Documents>([]);

  const groupedDocuments = groupDocuments(documents);
  const isEmpty = groupedDocuments.length === 0;

  return (
    <>
      {!isEmpty ? (
        <NewDocumentsList items={groupedDocuments} />
      ) : (
        <EmptyPage chatbotId={chatbotId} onUpload={setDocuments} />
      )}
    </>
  );
}
