'use client';

import { Button } from 'tailwind-ui';
import { useTrainChatbot } from '../../hooks/use-train-chatbot';
import { Documents } from '../../entities';

type TrainChatbotButtonProps = {
  chatbotId: string;
  documents: Documents;
  onSuccess: () => void;
};

export function TrainChatbotButton({
  chatbotId,
  documents,
  onSuccess,
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

  return <Button onClick={handleClick}>Train chatbot</Button>;
}
