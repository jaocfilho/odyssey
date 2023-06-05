import { Button } from 'tailwind-ui';
import { ChatbotSettingsFormSubmitButton } from '../../../ChatbotSettingsForm/SubmitButton';

type ButtonsAreaProps = {
  cancelUpdate: () => void;
};

export function ButtonsArea({ cancelUpdate }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <Button colorScheme="gray" onClick={cancelUpdate}>
          Cancel
        </Button>
        <ChatbotSettingsFormSubmitButton />
      </div>
    </div>
  );
}
