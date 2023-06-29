'use client';

import { FileUpload } from '@/modules/documents/components/FileUpload';
import { FilesTable } from '@/modules/documents/components/FilesTable';
import { useUploadFiles } from '@/modules/documents/hooks/use-upload-files';

type ChatbotDataSourcesPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourcePage({
  chatbotId,
}: ChatbotDataSourcesPageProps) {
  const { uploadFiles } = useUploadFiles();
  const handleFileUpload = async (files: FileList) => {
    await uploadFiles({ files, chatbotId });
  };

  return (
    <div className="m-4 flex flex-col gap-8">
      <FileUpload onFileUpload={handleFileUpload} />
      <FilesTable />
    </div>
  );
}
