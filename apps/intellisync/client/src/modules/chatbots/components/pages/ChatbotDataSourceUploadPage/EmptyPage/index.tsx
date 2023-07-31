import { EmptyDocumentsList } from '@/modules/documents/components/EmptyDocumentsList';
import { Documents } from '@/modules/documents/entities';

type EmptyPageProps = {
  chatbotId: string;
  onUpload: (documents: Documents) => void;
};

export function EmptyPage({ chatbotId, onUpload }: EmptyPageProps) {
  return (
    <div className="flex flex-col h-full justify-center">
      <EmptyDocumentsList chatbotId={chatbotId} onUpload={onUpload} />
    </div>
  );
}
