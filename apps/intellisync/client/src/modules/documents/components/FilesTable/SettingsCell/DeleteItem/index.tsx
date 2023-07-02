'use client';

import { useDeleteChatbotFileSourceById } from '@/modules/documents/hooks/use-delete-chatbot-file-source-by-id';
import { MenuItem } from 'tailwind-ui';

type DeleteItemProps = {
  fileId: string;
};

export function DeleteItem({ fileId }: DeleteItemProps) {
  const mutation = useDeleteChatbotFileSourceById();
  const handleDelete = () => {
    mutation.mutate({ id: fileId });
  };

  return <MenuItem onClick={handleDelete}>Delete</MenuItem>;
}
