import { baseUploadFiles, type BaseUploadFilesParams } from '../../api/base';
import { invalidateChatbotFileSourceQuery } from '../../api/helpers';

export function useUploadFiles() {
  const uploadFiles = async ({ chatbotId, files }: BaseUploadFilesParams) => {
    const response = await baseUploadFiles({ chatbotId, files });
    if (response.status === 200) {
      await invalidateChatbotFileSourceQuery(chatbotId);
    }
  };

  return { uploadFiles };
}
