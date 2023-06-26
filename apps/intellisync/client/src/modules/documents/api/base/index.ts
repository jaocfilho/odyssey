import { createFormDataFromFiles } from '../../helpers/base';
import { documentsApiUrls } from '../../urls';

export async function uploadFiles(files: FileList) {
  const formData = createFormDataFromFiles(files);

  const url = documentsApiUrls.upload;
  return await fetch(`http://localhost:3000/${url}`, {
    method: 'POST',
    body: formData,
  });
}
