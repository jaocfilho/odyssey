import { FileUploadButton } from '../FileUploadButton';

type FilesTableSummaryProps = {
  chatbotId: string;
};

export function FilesTableSummary({ chatbotId }: FilesTableSummaryProps) {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 dark:text-white">
          Data sources
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        {/* <FileUploadButton chatbotId={chatbotId} onUpload={console.log} /> */}
      </div>
    </div>
  );
}
