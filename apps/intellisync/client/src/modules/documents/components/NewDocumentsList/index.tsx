import {
  TNewDocumentsListItem,
  NewDocumentsListItem,
} from './NewDocumentsListItem';

type NewDocumentsListProps = {
  items: TNewDocumentsListItem[];
  removeDocuments: (fileName: string) => void;
};

export function NewDocumentsList({
  items,
  removeDocuments,
}: NewDocumentsListProps) {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {items.map((item) => (
        <NewDocumentsListItem
          key={item.fileName}
          {...item}
          removeDocuments={removeDocuments}
        />
      ))}
    </ul>
  );
}
