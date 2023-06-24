'use client';

import { FileUpload } from '@/modules/documents/components/FileUpload';

export default function ChatbotDetailsDataSourcePage() {
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch('http://localhost:3000/api/vector', {
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
