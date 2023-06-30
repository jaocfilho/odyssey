import { apiEndpoints } from '@/modules/requests/endpoints';
import { createFormDataFromFiles } from '../../helpers/base';
import { Supabase } from '@/lib/supabase/types';

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

export type SelectFileSourcesByChatbotIdParams = {
  chatbot_id: string;
};

export async function selectFileSourcesByChatbotId(
  { chatbot_id }: SelectFileSourcesByChatbotIdParams,
  supabase: Supabase
) {}
