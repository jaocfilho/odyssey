import {
  NewDocumentsListItem,
  NewDocumentsListItemProps,
} from './NewDocumentsListItem';

type NewDocumentsListProps = {
  items: NewDocumentsListItemProps[];
};

export function NewDocumentsList({ items }: NewDocumentsListProps) {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {items.map((item) => (
        <NewDocumentsListItem key={item.fileName} {...item} />
      ))}
    </ul>
  );
}
