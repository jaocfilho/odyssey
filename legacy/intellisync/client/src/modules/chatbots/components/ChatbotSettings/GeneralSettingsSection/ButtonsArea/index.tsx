import { ChatbotSettingsFormSubmitButton } from '../../../ChatbotSettingsForm/SubmitButton';
import { CancelButton } from '@/components/Buttons/CancelButton';

type ButtonsAreaProps = {
  onCancel: () => void;
  disabled?: boolean;
};

export function ButtonsArea({ onCancel, disabled }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <CancelButton colorScheme="gray" onClick={onCancel} disabled={disabled}>
          Cancel
        </CancelButton>
        <ChatbotSettingsFormSubmitButton disabled={disabled} />
      </div>
    </div>
  );
}
