'use client';

import { Button } from 'tailwind-ui';
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
