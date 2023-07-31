import { Documents } from '../../entities';
import { FileUploadButton } from '../FileUploadButton';

type EmptyDocumentsListProps = {
  chatbotId: string;
  onUpload: (documents: Documents) => void;
};

export function EmptyDocumentsList({
  chatbotId,
  onUpload,
}: EmptyDocumentsListProps) {
  return (
    <div className="text-center flex flex-col">
      <svg
        className="mx-auto h-12 w-12 dark:text-grayScheme-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold">No files uploaded</h3>
      <p className="mt-1 text-sm dark:text-grayScheme-500">
        Get started by uploading a file.
      </p>
      <div className="mt-6 self-center">
        <FileUploadButton chatbotId={chatbotId} onUpload={onUpload} />
      </div>
    </div>
  );
}
