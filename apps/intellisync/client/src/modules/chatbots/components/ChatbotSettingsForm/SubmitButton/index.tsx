import { Button } from 'tailwind-ui';

export function ChatbotSettingsFormSubmitButton() {
  return (
    <Button form="chatbotSettingsForm" type="submit" disabled>
      Save
    </Button>
  );
}
