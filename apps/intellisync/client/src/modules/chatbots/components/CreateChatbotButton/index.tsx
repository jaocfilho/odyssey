'use client';

import { CreateChatbotDrawer } from '../CreateChatbotDrawer';
import { BrandButton } from '@/components/Buttons/BrandButton';

type BaseCreateChatbotButtonProps = {
  openDrawer: () => void;
};

export function BaseCreateChatbotButton({
  openDrawer,
}: BaseCreateChatbotButtonProps) {
  return <BrandButton onClick={openDrawer}>Create a new chatbot</BrandButton>;
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
