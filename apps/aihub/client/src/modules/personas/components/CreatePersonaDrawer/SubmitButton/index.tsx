import { Button } from 'tailwind-ui';

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
    <Button type="submit" form="createPersonaForm">
      Save
    </Button>
  );
}
