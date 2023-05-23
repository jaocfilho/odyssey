'use client';

import { type ReactNode } from 'react';

import { Button } from '../../Button';

type CloseDrawer = () => void;

export type ComponentDrawerFooterProps = {
  onClose: () => void;
  actionButton: (closeDrawer: CloseDrawer) => ReactNode;
};

export function ComponentDrawerFooter({
  onClose,
  actionButton,
}: ComponentDrawerFooterProps) {
  return (
    <div className="flex flex-shrink-0 gap-4 justify-end px-4 py-4 border-t dark:border-zinc-50/10">
      <Button colorScheme="gray" onClick={onClose}>
        Cancel
      </Button>
      {actionButton(onClose)}
    </div>
  );
}
