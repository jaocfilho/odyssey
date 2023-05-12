import { Button } from 'tailwind-ui';

type ActionButtonProps = {
  closeDrawer: () => void;
  triggerRefinementForm: () => Promise<boolean>;
};

export function ActionButton({
  closeDrawer,
  triggerRefinementForm,
}: ActionButtonProps) {
  const handleClick = async () => {
    await triggerRefinementForm();
    closeDrawer();
  };

  return (
    <Button form="createAppForm" onClick={handleClick}>
      Save
    </Button>
  );
}
