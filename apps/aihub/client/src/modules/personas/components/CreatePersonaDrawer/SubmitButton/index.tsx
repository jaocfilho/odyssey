import { Button } from 'tailwind-ui';

type SubmitButton = {
  closeDrawer: () => void;
};

export function SubmitButton({ closeDrawer }: SubmitButton) {
  return (
    <Button onClick={closeDrawer} type="submit" form="createPersonaForm">
      Save
    </Button>
  );
}
