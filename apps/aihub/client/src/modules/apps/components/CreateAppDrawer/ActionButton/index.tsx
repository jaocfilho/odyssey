import { Button } from 'tailwind-ui';

type ActionButtonProps = {
  closeDrawer: () => void;
  submitForms: () => void;
  createAppIsSubmited: boolean;
  refinementIsSubmited: boolean;
};

export function ActionButton({
  closeDrawer,
  submitForms,
  createAppIsSubmited,
  refinementIsSubmited,
}: ActionButtonProps) {
  if (createAppIsSubmited && refinementIsSubmited) {
    closeDrawer();
  }

  return <Button onClick={submitForms}>Save</Button>;
}
