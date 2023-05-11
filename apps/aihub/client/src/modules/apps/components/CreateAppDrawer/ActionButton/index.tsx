import { Button } from 'tailwind-ui';

type ActionButtonProps = {
  closeDrawer: () => void;
};

export function ActionButton({ closeDrawer }: ActionButtonProps) {
  return (
    <Button form="createAppForm" onClick={closeDrawer} type="submit">
      Save
    </Button>
  );
}
