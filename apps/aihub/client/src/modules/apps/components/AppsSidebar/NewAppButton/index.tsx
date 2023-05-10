'use client';

import { Button } from '@/components/Buttons/Button';
import { Drawer } from '@/components/Drawer';

export function NewAppButton() {
  return (
    <Drawer
      title="Create a new app"
      trigger={(openDrawer) => (
        <Button onClick={openDrawer}>Create new app</Button>
      )}
      successButton={(closeDrawer) => (
        <Button onClick={closeDrawer} type="submit" colorScheme="emerald">
          Save
        </Button>
      )}
    >
      <p>derp</p>
    </Drawer>
  );
}
