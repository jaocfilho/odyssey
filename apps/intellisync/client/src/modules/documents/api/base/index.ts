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

export type BaseSelectFileSourcesByChatbotIdParams = {
  chatbot_id: string;
};

export async function baseSelectAllFileSourcesByChatbotId(
  { chatbot_id }: BaseSelectFileSourcesByChatbotIdParams,
  supabase: Supabase
) {
  return await supabase
    .from('chatbots_files_sources')
    .select('*')
    .eq('chatbot_id', chatbot_id);
}
