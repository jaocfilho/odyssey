'use client';

import { type ReactNode } from 'react';

import { Button } from '@/components/Buttons/Button';

type CloseDrawer = () => void;

export type ComponentDrawerFooterProps = {
  onClose: () => void;
  successButton: (closeDrawer: CloseDrawer) => ReactNode;
};

export function ComponentDrawerFooter({
  onClose,
  successButton,
}: ComponentDrawerFooterProps) {
  return (
    <div className="flex flex-shrink-0 gap-4 justify-end px-4 py-4 border-t dark:border-zinc-50/10">
      <Button colorScheme="gray" onClick={onClose}>
        Cancel
      </Button>
      {successButton(onClose)}
    </div>
  );
}
