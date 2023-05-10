import { Button } from '@/components/Buttons/Button';

type ActionButtonProps = {
  closeDrawer: () => void;
};

export function ActionButton({ closeDrawer }: ActionButtonProps) {
  return (
    <Button onClick={closeDrawer} type="submit" colorScheme="emerald">
      Save
    </Button>
  );
}
