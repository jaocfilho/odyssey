'use client';

import { useState } from 'react';

import { groupArrayBy } from '@odyssey/arrays';
import { Documents } from '@/modules/documents/entities';
import { EmptyPage } from './EmptyPage';
import { NonEmptyPage } from './NonEmptyPage';

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

  const resetDocuments = () => setDocuments([]);

  const groupedDocuments = groupDocuments(documents);
  const isEmpty = groupedDocuments.length === 0;

  return (
    <>
      {!isEmpty ? (
        <NonEmptyPage
          items={groupedDocuments}
          resetDocuments={resetDocuments}
        />
      ) : (
        <EmptyPage chatbotId={chatbotId} onUpload={setDocuments} />
      )}
    </>
  );
}
