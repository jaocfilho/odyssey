import { Button } from 'tailwind-ui';
import { CreateAppLink } from '@/modules/navigation/components/CreateAppLink';

export function RedirectToCreateApp() {
  return (
    <CreateAppLink>
      <Button>Create</Button>
    </CreateAppLink>
  );
}
