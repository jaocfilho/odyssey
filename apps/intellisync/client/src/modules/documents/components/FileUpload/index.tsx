'use client';

import { useRef } from 'react';

import { Button } from 'tailwind-ui';

type FileUploadProps = {
  onFileUpload: (file: FileList) => void;
};

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <span>
      <Button colorScheme="indigo" onClick={handleClick}>
        Upload file
      </Button>
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        onChange={handleFileUpload}
        multiple
        ref={fileInputRef}
      />
    </span>
  );
}
