'use client';

import { Button } from '@/components/Buttons/Button';
import { Drawer } from '@/components/Drawer';

export function NewAppButton() {
  return (
    <Drawer
      title="Create a new app"
      onCancel={() => console.log('peido')}
      trigger={(openDrawer) => (
        <Button onClick={openDrawer}>Create new app</Button>
      )}
    >
      <p>derp</p>
    </Drawer>
  );
}
