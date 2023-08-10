import { NewDocumentsList } from '../NewDocumentsList';
import { TokenCheckoutArea } from '../TokenCheckoutArea';
import { type TNewDocumentsListItem } from '../NewDocumentsListItem';

type DocumentsAreaProps = {
  groupedDocuments: TNewDocumentsListItem[];
  removeDocuments: (fileName: string) => void;
};

export function DocumentsArea({
  groupedDocuments,
  removeDocuments,
}: DocumentsAreaProps) {
  return (
    <div className="flex flex-col h-full divide-y dark:divide-white/5">
      <NewDocumentsList
        removeDocuments={removeDocuments}
        items={groupedDocuments}
      />
      <div>
        <TokenCheckoutArea items={groupedDocuments} />
      </div>
    </div>
  );
}
