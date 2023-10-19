'use client';

import { Button } from 'cosmic-ui';
import { useTrainChatbot } from '../../hooks/use-train-chatbot';
import { Documents } from '../../entities';

type TrainChatbotButtonProps = {
  chatbotId: string;
  documents: Documents;
  onSuccess: () => void;
  disabled?: boolean;
};

export function TrainChatbotButton({
  chatbotId,
  documents,
  onSuccess,
  disabled,
}: TrainChatbotButtonProps) {
  const mutation = useTrainChatbot();

  const handleClick = () => {
    mutation.mutate(
      { chatbotId, documents },
      {
        onSuccess,
      }
    );
  };

  return (
    <Button disabled={disabled} onClick={handleClick}>
      Train chatbot
    </Button>
  );
}
