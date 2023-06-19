import { BrandButton } from '@/components/Buttons/BrandButton';

type SubmitButton = {
  closeDrawer: () => void;
  isSubmitSuccessful: boolean;
};

export function SubmitButton({
  closeDrawer,
  isSubmitSuccessful,
}: SubmitButton) {
  if (isSubmitSuccessful) {
    closeDrawer();
  }

  return (
    <BrandButton type="submit" form="createChatbotForm">
      Save
    </BrandButton>
  );
}
