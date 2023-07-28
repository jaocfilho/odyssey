import { FilesTable } from '@/modules/documents/components/FilesTable';

type ChatbotDataSourceUploadPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourceUploadPage({
  chatbotId,
}: ChatbotDataSourceUploadPageProps) {
  return (
    <div className="m-4 flex flex-col gap-8 h-full">
      <FilesTable chatbotId={chatbotId} />
    </div>
  );
}
