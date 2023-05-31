'use client';

import { Button } from 'tailwind-ui';
import { CreateChatbotDrawer } from '../CreateChatbotDrawer';

type BaseCreateChatbotButtonProps = {
  openDrawer: () => void;
};

export function BaseCreateChatbotButton({
  openDrawer,
}: BaseCreateChatbotButtonProps) {
  return <Button onClick={openDrawer}>Create a new chatbot</Button>;
}

export function CreateChatbotButton() {
  return (
    <CreateChatbotDrawer
      triggerComponent={(openDrawer) => (
        <BaseCreateChatbotButton openDrawer={openDrawer} />
      )}
    />
  );
}
