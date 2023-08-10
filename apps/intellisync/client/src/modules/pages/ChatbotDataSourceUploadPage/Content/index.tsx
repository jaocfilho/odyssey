'use client';

import { Documents } from '@/modules/documents/entities';
import { TNewDocumentsListItem } from './NewDocumentsListItem';
import { DocumentsArea } from './DocumentsArea';
import { ButtonsArea } from './ButtonsArea';

type ContentProps = {
  groupedDocuments: TNewDocumentsListItem[];
  resetDocuments: () => void;
  removeDocuments: (fileName: string) => void;
  documents: Documents;
};

export function Content({
  groupedDocuments,
  resetDocuments,
  removeDocuments,
  documents,
}: ContentProps) {
  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <DocumentsArea
        removeDocuments={removeDocuments}
        groupedDocuments={groupedDocuments}
      />
      <ButtonsArea resetDocuments={resetDocuments} documents={documents} />
    </div>
  );
}
