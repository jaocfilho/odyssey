'use client';

import { Button } from '@/components/Buttons/Button';

export type ComponentDrawerFooterProps = {
  onCancel?: () => void;
};

export function ComponentDrawerFooter({
  onCancel,
}: ComponentDrawerFooterProps) {
  return (
    <div className="flex flex-shrink-0 gap-4 justify-end px-4 py-4 border-t dark:border-zinc-50/10">
      <Button colorScheme="gray" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" colorScheme="emerald">
        Save
      </Button>
    </div>
  );
}
