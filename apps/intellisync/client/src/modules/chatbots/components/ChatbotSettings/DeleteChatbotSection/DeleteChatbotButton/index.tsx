'use client';

import { useBooleanState } from '@odyssey/react-hooks';
import { Button, Modal } from 'tailwind-ui';
import { useDeleteChatbotById } from '@/modules/chatbots/hooks/use-delete-chatbot-by-id';

type DeleteChatbotButtonProps = {
  id: string;
};

export function DeleteChatbotButton({ id }: DeleteChatbotButtonProps) {
  const [open, handleClose, handleOpen] = useBooleanState();

  const deleteMutation = useDeleteChatbotById();
  const deleteChatbot = () => {
    deleteMutation.mutate({ id });
  };

  return (
    <>
      <Button colorScheme="red" onClick={handleOpen}>
        Delete my chatbot
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        onConfirm={deleteChatbot}
        title="Delete chatbot"
        message="Are you sure you want to delete this chatbot?
      All of your data will be permanently removed from our servers forever. This action cannot be undone."
        confirmButton="Delete"
      />
    </>
  );
}
