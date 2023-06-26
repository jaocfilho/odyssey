'use client';

import { FileUpload } from '@/modules/documents/components/FileUpload';
import { useUploadFiles } from '@/modules/documents/hooks/use-upload-files';

type Params = {
  params: { id: string };
};

export default function ChatbotDetailsDataSourcePage({ params }: Params) {
  const { id } = params;

  const { uploadFiles } = useUploadFiles();
  const handleFileUpload = async (files: FileList) => {
    await uploadFiles({ files, chatbotId: id });
  };

  return (
    <div className="m-4 flex flex-col gap-8">
      <h2>chatbot data source page</h2>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
}
