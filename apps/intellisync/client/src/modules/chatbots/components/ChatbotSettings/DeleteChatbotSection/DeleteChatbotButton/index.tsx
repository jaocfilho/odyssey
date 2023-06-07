'use client';

import { useBooleanState } from '@odyssey/react-hooks';
import { Button, Modal } from 'tailwind-ui';

export function DeleteChatbotButton() {
  const [open, handleClose, handleOpen] = useBooleanState();

  return (
    <>
      <Button colorScheme="red" onClick={handleOpen}>
        Delete my chatbot
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        title="Delete chatbot"
        message="Are you sure you want to delete this chatbot?
      All of your data will be permanently removed from our servers forever. This action cannot be undone."
        confirmButton="Delete"
      />
    </>
  );
}
