'use client';

import { useDeleteChatbotFileSourceById } from '@/modules/documents/hooks/use-delete-chatbot-file-source-by-id';
import { useParams } from 'next/navigation';
import { MenuItem } from 'tailwind-ui';

type DeleteItemProps = {
  fileId: string;
};

export function DeleteItem({ fileId }: DeleteItemProps) {
  const params = useParams();
  const mutation = useDeleteChatbotFileSourceById({ chatbotId: params.id });
  const handleDelete = () => {
    mutation.mutate({ id: fileId });
  };

  return <MenuItem onClick={handleDelete}>Delete</MenuItem>;
}
