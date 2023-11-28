import { BrandButton } from '@/components/Buttons/BrandButton';

type ChatbotSettingsFormSubmitButtonProps = {
  disabled?: boolean;
};

export function ChatbotSettingsFormSubmitButton({
  disabled,
}: ChatbotSettingsFormSubmitButtonProps) {
  return (
    <BrandButton form="chatbotSettingsForm" type="submit" disabled={disabled}>
      Save
    </BrandButton>
  );
}
