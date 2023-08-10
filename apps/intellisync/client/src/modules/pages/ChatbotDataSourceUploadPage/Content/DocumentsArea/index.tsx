'use client';

import { NewDocumentsList } from '../NewDocumentsList';
import { TokenCheckoutArea } from '../TokenCheckoutArea';
import { type TNewDocumentsListItem } from '../NewDocumentsListItem';
import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';

type DocumentsAreaProps = {
  groupedDocuments: TNewDocumentsListItem[];
  removeDocuments: (fileName: string) => void;
};

export function DocumentsArea({
  groupedDocuments,
  removeDocuments,
}: DocumentsAreaProps) {
  const totalCharacters = groupedDocuments.reduce(
    (acc, document) => acc + document.characters,
    0
  );

  const storageTokensQuery = useStorageTokens();

  return (
    <div className="flex flex-col h-full divide-y dark:divide-white/5">
      <NewDocumentsList
        removeDocuments={removeDocuments}
        items={groupedDocuments}
      />
      <div>
        <TokenCheckoutArea
          totalCharacters={totalCharacters}
          storageTokens={storageTokensQuery.data?.remaining_storage_tokens}
        />
      </div>
    </div>
  );
}
