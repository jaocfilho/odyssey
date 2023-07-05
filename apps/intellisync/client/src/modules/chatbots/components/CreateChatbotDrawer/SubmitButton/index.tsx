import { BrandButton } from '@/components/Buttons/BrandButton';
import { useProfile } from '@/modules/profiles/hooks/use-profile';

type SubmitButton = {
  closeDrawer: () => void;
  isSubmitSuccessful: boolean;
};

export function SubmitButton({
  closeDrawer,
  isSubmitSuccessful,
}: SubmitButton) {
  const profileQuery = useProfile();

  const organizationIsLoaded = !!profileQuery.data?.last_used_organization;

  if (isSubmitSuccessful) {
    closeDrawer();
  }

  return (
    <BrandButton
      type="submit"
      form="createChatbotForm"
      disabled={!organizationIsLoaded}
    >
      Save
    </BrandButton>
  );
}
