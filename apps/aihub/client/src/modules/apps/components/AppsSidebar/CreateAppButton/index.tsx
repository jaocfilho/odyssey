'use client';

import { Button } from '@/components/Buttons/Button';
import { CreateAppDrawer } from '../../CreateAppDrawer';

export function CreateAppButton() {
  return (
    <CreateAppDrawer
      trigger={(openDrawer) => (
        <Button onClick={openDrawer}>Create new app</Button>
      )}
    />
  );
}
