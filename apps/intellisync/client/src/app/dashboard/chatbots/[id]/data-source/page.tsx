'use client';

import { FileUpload } from '@/modules/documents/components/FileUpload';

export default function ChatbotDetailsDataSourcePage() {
  const handleFileUpload = async (files: FileList) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className="m-4 flex flex-col gap-8">
      <h2>chatbot data source page</h2>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
}
