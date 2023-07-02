'use client';

import { useGetCurrentChatbotId } from '@/modules/chatbots/hooks/use-get-current-chatbot-id';
import { useDeleteChatbotFileSourceById } from '@/modules/documents/hooks/use-delete-chatbot-file-source-by-id';
import { MenuItem } from 'tailwind-ui';

type DeleteItemProps = {
  fileId: string;
};

export function DeleteItem({ fileId }: DeleteItemProps) {
  const { chatbotId } = useGetCurrentChatbotId();
  const mutation = useDeleteChatbotFileSourceById({ chatbotId });
  const handleDelete = () => {
    mutation.mutate({ id: fileId });
  };

  return <MenuItem onClick={handleDelete}>Delete</MenuItem>;
}
