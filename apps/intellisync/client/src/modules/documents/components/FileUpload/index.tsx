type FileUploadProps = {
  onFileUpload: (file: FileList) => void;
};

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <label
      htmlFor="file-upload"
      className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
    >
      <span>Upload a file</span>
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        onChange={handleFileUpload}
        multiple
      />
    </label>
  );
}
