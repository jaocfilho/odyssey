import { Button } from 'cosmic-ui';
import { FileUploadButton } from '../FileUploadButton';
import { urlPaths } from '@/modules/navigation/urls';

type FilesTableSummaryProps = {
  chatbotId: string;
};

export function FilesTableSummary({ chatbotId }: FilesTableSummaryProps) {
  const url = urlPaths.chatbots.details.dataSourceUpload(chatbotId);

  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 dark:text-white">
          Data sources
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Button href={url}>Add data source</Button>
      </div>
    </div>
  );
}
