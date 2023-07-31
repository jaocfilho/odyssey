import { baseUploadFiles, type BaseUploadFilesParams } from '../../api/base';
import { Documents } from '../../entities';
import { ServerParseFilesResponse } from '../../api/server';

type UseUploadFiles = {
  onUpload: (documents: Documents) => void;
};

export function useUploadFiles({ onUpload }: UseUploadFiles) {
  const uploadFiles = async ({ chatbotId, files }: BaseUploadFilesParams) => {
    const response = await baseUploadFiles({ chatbotId, files });
    if (response.status === 200) {
      const { documents } = (await response.json()) as ServerParseFilesResponse;
      onUpload(documents);
    }
  };

  return { uploadFiles };
}
