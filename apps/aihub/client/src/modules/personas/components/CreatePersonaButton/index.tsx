'use client';

import { Button } from 'tailwind-ui';
import { CreatePersonaDrawer } from '../CreatePersonaDrawer';

type BaseCreatePersonaButtonProps = {
  openDrawer: () => void;
};

export function BaseCreatePersonaButton({
  openDrawer,
}: BaseCreatePersonaButtonProps) {
  return <Button onClick={openDrawer}>Create new persona</Button>;
}

export function CreatePersonaButton() {
  return (
    <CreatePersonaDrawer
      triggerComponent={(openDrawer) => (
        <BaseCreatePersonaButton openDrawer={openDrawer} />
      )}
    />
  );
}
