'use client';

import { useState } from 'react';

import { groupArrayBy } from '@odyssey/arrays';
import { Button } from 'tailwind-ui';
import { Documents } from '@/modules/documents/entities';
import { FileUploadButton } from '@/modules/documents/components/FileUploadButton';
import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { EmptyDocumentsList } from '@/modules/documents/components/EmptyDocumentsList';

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
    <div className="m-4 flex flex-col gap-8 h-full justify-between">
      {!isEmpty ? (
        <NewDocumentsList items={groupedDocuments} />
      ) : (
        <EmptyDocumentsList chatbotId={chatbotId} onUpload={setDocuments} />
      )}
      <Button className="self-end">Train chatbot</Button>
    </div>
  );
}
