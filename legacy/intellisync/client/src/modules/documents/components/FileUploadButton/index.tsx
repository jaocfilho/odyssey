'use client';

import { useRef } from 'react';

import { Button } from 'cosmic-ui';
import { useUploadFiles } from '../../hooks/use-upload-files';
import { Documents } from '../../entities';

type FileUploadProps = {
  chatbotId: string;
  onUpload: (documents: Documents) => void;
};

export function FileUploadButton({ chatbotId, onUpload }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadFiles } = useUploadFiles({ onUpload });

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
