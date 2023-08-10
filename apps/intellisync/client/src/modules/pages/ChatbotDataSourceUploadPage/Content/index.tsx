'use client';

import { Documents } from '@/modules/documents/entities';
import { TNewDocumentsListItem } from './NewDocumentsListItem';
import { DocumentsArea } from './DocumentsArea';
import { ButtonsArea } from './ButtonsArea';
import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';

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
  const storageTokensQuery = useStorageTokens();

  const canUploadFiles = !!storageTokensQuery.data?.remaining_storage_tokens;

  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <DocumentsArea
        removeDocuments={removeDocuments}
        groupedDocuments={groupedDocuments}
        storageTokens={storageTokensQuery.data?.remaining_storage_tokens}
      />
      <ButtonsArea resetDocuments={resetDocuments} documents={documents} />
    </div>
  );
}
