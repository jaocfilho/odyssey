import { apiEndpoints } from '@/modules/requests/endpoints';
import { createFormDataFromFiles } from '../../helpers/base';

type UploadFilesParams = {
  files: FileList;
  chatbotId: string;
};

export async function uploadFiles({ chatbotId, files }: UploadFilesParams) {
  const formData = createFormDataFromFiles(files);

  const url = apiEndpoints.chatbots.upload(chatbotId);

  return await fetch(`http://localhost:3000/${url}`, {
    method: 'POST',
    body: formData,
  });
}
