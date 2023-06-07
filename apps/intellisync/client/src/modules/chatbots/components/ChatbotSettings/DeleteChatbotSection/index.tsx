'use client';

import { Button, Modal } from 'tailwind-ui';
import { useBooleanState } from '@odyssey/react-hooks';
import { SectionContainer } from '../SectionContainer';
import { SectionInfo } from '../SectionInfo';

export function DeleteChatbotSection() {
  const [open, handleClose, handleOpen] = useBooleanState();

  return (
    <SectionContainer>
      <SectionInfo
        title="Delete chatbot"
        description="This action is not reversible. All information related to this chatbot will be deleted permanently."
      />

      <div className="flex items-start md:col-span-2">
        <Button colorScheme="red" onClick={handleOpen}>
          Yes, delete my chatbot
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        title="Delete chatbot"
        message="Are you sure you want to delete this chatbot?
        All of your data will be permanently removed from our servers forever. This action cannot be undone."
        confirmButton="Delete"
      />
    </SectionContainer>
  );
}
