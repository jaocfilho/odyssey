import { NewDocumentsList } from '../NewDocumentsList';
import { TokenCheckoutArea } from '../TokenCheckoutArea';
import { type TNewDocumentsListItem } from '../NewDocumentsListItem';

type DocumentsAreaProps = {
  groupedDocuments: TNewDocumentsListItem[];
  removeDocuments: (fileName: string) => void;
  storageTokens?: number;
};

export function DocumentsArea({
  groupedDocuments,
  removeDocuments,
  storageTokens,
}: DocumentsAreaProps) {
  const totalCharacters = groupedDocuments.reduce(
    (acc, document) => acc + document.characters,
    0
  );

  return (
    <div className="flex flex-col h-full divide-y dark:divide-white/5">
      <NewDocumentsList
        removeDocuments={removeDocuments}
        items={groupedDocuments}
      />
      <div>
        <TokenCheckoutArea
          totalCharacters={totalCharacters}
          storageTokens={storageTokens}
        />
      </div>
    </div>
  );
}
