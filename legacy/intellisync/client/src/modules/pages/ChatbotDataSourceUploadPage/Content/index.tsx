'use client';

import { Documents } from '@/modules/documents/entities';
import { TNewDocumentsListItem } from './NewDocumentsListItem';
import { ButtonsArea } from './ButtonsArea';
import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';
import { NewDocumentsList } from './NewDocumentsList';
import { TokenCheckoutArea } from './TokenCheckoutArea';

export function approximateTokenUsage(characters: number) {
  const minTokenUsage = characters > 1000 ? characters - 200 : characters;
  const maxTokenUsage = characters + 200;

  return { minTokenUsage, maxTokenUsage };
}

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

  const totalCharacters = groupedDocuments.reduce(
    (acc, document) => acc + document.characters,
    0
  );

  const { minTokenUsage, maxTokenUsage } =
    approximateTokenUsage(totalCharacters);

  const storageTokens = storageTokensQuery.data?.remaining_storage_tokens;

  const hasSuficientTokens =
    !!storageTokens && storageTokens - maxTokenUsage >= 0;

  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <div className="flex flex-col h-full divide-y dark:divide-white/5">
        <NewDocumentsList
          removeDocuments={removeDocuments}
          items={groupedDocuments}
        />
        <div>
          <TokenCheckoutArea
            totalCharacters={totalCharacters}
            hasSuficientTokens={hasSuficientTokens}
            minTokenUsage={minTokenUsage}
            maxTokenUsage={maxTokenUsage}
            storageTokens={storageTokens}
          />
        </div>
      </div>
      <ButtonsArea
        resetDocuments={resetDocuments}
        documents={documents}
        hasSuficientTokens={hasSuficientTokens}
      />
    </div>
  );
}
