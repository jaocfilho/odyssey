import { Button } from 'tailwind-ui';

type ChatbotSettingsFormSubmitButtonProps = {
  disabled?: boolean;
};

export function ChatbotSettingsFormSubmitButton({
  disabled,
}: ChatbotSettingsFormSubmitButtonProps) {
  return (
    <Button form="chatbotSettingsForm" type="submit" disabled={disabled}>
      Save
    </Button>
  );
}
