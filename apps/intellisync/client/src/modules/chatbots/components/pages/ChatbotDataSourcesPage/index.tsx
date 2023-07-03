import { FilesTable } from '@/modules/documents/components/FilesTable';

type ChatbotDataSourcesPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourcePage({
  chatbotId,
}: ChatbotDataSourcesPageProps) {
  return (
    <div className="m-4 flex flex-col gap-8 h-full">
      <FilesTable chatbotId={chatbotId} />
    </div>
  );
}
