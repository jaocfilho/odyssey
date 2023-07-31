import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { NewDocumentsListItemProps } from '@/modules/documents/components/NewDocumentsList/NewDocumentsListItem';

type NonEmptyPageProps = {
  items: NewDocumentsListItemProps[];
};

export function NonEmptyPage({ items }: NonEmptyPageProps) {
  return <NewDocumentsList items={items} />;
}
