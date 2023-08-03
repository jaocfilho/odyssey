import {
  TNewDocumentsListItem,
  NewDocumentsListItem,
} from './NewDocumentsListItem';

type NewDocumentsListProps = {
  items: TNewDocumentsListItem[];
  removeDocument: (index: number) => void;
};

export function NewDocumentsList({
  items,
  removeDocument,
}: NewDocumentsListProps) {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {items.map((item, index) => (
        <NewDocumentsListItem
          key={item.fileName}
          {...item}
          removeDocument={() => removeDocument(index)}
        />
      ))}
    </ul>
  );
}
