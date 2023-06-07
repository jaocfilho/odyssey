import { Button } from 'tailwind-ui';
import { ChatbotSettingsFormSubmitButton } from '../../../ChatbotSettingsForm/SubmitButton';

type ButtonsAreaProps = {
  onCancel: () => void;
};

export function ButtonsArea({ onCancel }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <Button colorScheme="gray" onClick={onCancel} disabled>
          Cancel
        </Button>
        <ChatbotSettingsFormSubmitButton />
      </div>
    </div>
  );
}
