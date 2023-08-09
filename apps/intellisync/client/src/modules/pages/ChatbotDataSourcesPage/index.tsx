import { FilesTable } from '@/modules/documents/components/FilesTable';

type ChatbotDataSourcePageProps = {
  chatbotId: string;
};

export function ChatbotDataSourcePage({
  chatbotId,
}: ChatbotDataSourcePageProps) {
  return (
    <div className="m-4 flex flex-col gap-8 h-full">
      <FilesTable chatbotId={chatbotId} />
    </div>
  );
}
