'use client';

import { useState } from 'react';

import { FileUploadButton } from '@/modules/documents/components/FileUploadButton';
import { Documents } from '@/modules/documents/entities';
import { Button } from 'tailwind-ui';
import { groupArrayBy } from '@odyssey/arrays';

const activityItems = [
  {
    id: '1',
    characters: 1000,
    name: 'resume.pdf',
  },
  {
    id: '2',
    characters: 2000,
    name: 'resume.txt',
  },
  {
    id: '3',
    characters: 1000,
    name: 'resume.pdf',
  },
  {
    id: '4',
    characters: 4000,
    name: 'resume.json',
  },
];

type ChatbotDataSourceUploadPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourceUploadPage({
  chatbotId,
}: ChatbotDataSourceUploadPageProps) {
  const [documents, setDocuments] = useState<Documents>([]);

  const groupedDocuments = groupArrayBy(
    documents,
    (d) => d.metadata.essential.fileName
  );

  const docs = Object.entries(groupedDocuments).map(
    ([fileName, documents]) => ({
      characters: documents.reduce(
        (acc, document) => acc + document.metadata.essential.characters,
        0
      ),
      fileName,
    })
  );

  return (
    <div className="m-4 flex flex-col gap-8 h-full justify-between">
      <FileUploadButton chatbotId={chatbotId} onUpload={setDocuments} />
      <ul role="list" className="divide-y divide-white/5">
        {docs.map((document) => (
          <li key={document.fileName} className="py-4">
            <div className="flex items-center gap-x-3">
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                {document.fileName}
              </h3>
              <p className="flex-none text-xs text-gray-500">
                {document.characters} characters
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Button className="self-end">Train chatbot</Button>
    </div>
  );
}
