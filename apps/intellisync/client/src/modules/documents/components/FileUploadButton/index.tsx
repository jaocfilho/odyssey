'use client';

import { useRef } from 'react';

import { Button } from 'tailwind-ui';
import { useUploadFiles } from '../../hooks/use-upload-files';

type FileUploadProps = {
  chatbotId: string;
};

export function FileUploadButton({ chatbotId }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadFiles } = useUploadFiles();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files) {
      await uploadFiles({ files, chatbotId });
    }
  };

  return (
    <span>
      <Button colorScheme="indigo" onClick={handleClick}>
        Upload file
      </Button>
      <label htmlFor="file-upload" className="hidden">
        <p>file input</p>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          onChange={handleFileUpload}
          multiple
          ref={fileInputRef}
        />
      </label>
    </span>
  );
}
