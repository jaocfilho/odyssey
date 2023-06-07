import { Button } from 'tailwind-ui';
import { ChatbotSettingsFormSubmitButton } from '../../../ChatbotSettingsForm/SubmitButton';

type ButtonsAreaProps = {
  onCancel: () => void;
  disabled?: boolean;
};

export function ButtonsArea({ onCancel, disabled }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <Button colorScheme="gray" onClick={onCancel} disabled={disabled}>
          Cancel
        </Button>
        <ChatbotSettingsFormSubmitButton disabled={disabled} />
      </div>
    </div>
  );
}
