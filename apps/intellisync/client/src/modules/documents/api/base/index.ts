import { apiEndpoints } from '@/modules/requests/endpoints';
import { createFormDataFromFiles } from '../../helpers/base';
import { Supabase } from '@/lib/supabase/types';
import { baseDeleteById } from '@/lib/supabase/api';

export type BaseUploadFilesParams = {
  files: FileList;
  chatbotId: string;
};

export async function baseUploadFiles({
  chatbotId,
  files,
}: BaseUploadFilesParams) {
  const formData = createFormDataFromFiles(files);

  const url = apiEndpoints.chatbots.train(chatbotId);

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

export type BaseDeleteChatbotFileSourceByIdParams = {
  id: string;
};

export async function baseDeleteChatbotFileSourceById(
  { id }: BaseDeleteChatbotFileSourceByIdParams,
  supabase: Supabase
) {
  return await baseDeleteById({ id }, 'chatbots_files_sources', supabase);
}
