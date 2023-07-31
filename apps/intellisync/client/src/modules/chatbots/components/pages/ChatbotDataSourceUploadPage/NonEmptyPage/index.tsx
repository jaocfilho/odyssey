import { Button } from 'tailwind-ui';
import { NewDocumentsList } from '@/modules/documents/components/NewDocumentsList';
import { NewDocumentsListItemProps } from '@/modules/documents/components/NewDocumentsList/NewDocumentsListItem';

type NonEmptyPageProps = {
  items: NewDocumentsListItemProps[];
  resetDocuments: () => void;
};

export function NonEmptyPage({ items, resetDocuments }: NonEmptyPageProps) {
  return (
    <div className="flex flex-col m-8 h-full justify-between">
      <NewDocumentsList items={items} />
      <div className="flex self-end mt-6 gap-4">
        <Button colorScheme="gray" onClick={resetDocuments}>
          Cancel
        </Button>
        <Button>Train chatbot</Button>
      </div>
    </div>
  );
}
