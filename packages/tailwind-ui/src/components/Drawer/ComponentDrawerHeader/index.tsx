import { Dialog } from '@headlessui/react';

import { Subtitle } from './Subtitle';

export type ComponentDrawerHeaderProps = {
  title: string;
  subTitle?: string;
};

export function ComponentDrawerHeader({
  title,
  subTitle,
}: ComponentDrawerHeaderProps) {
  const hasSubtitle = !!subTitle;

  return (
    <div className="px-4 py-6 border-b dark:border-white/5 sm:px-6">
      <Dialog.Title className="text-base font-semibold leading-6 dark:text-zinc-200">
        {title}
      </Dialog.Title>
      {hasSubtitle ? <Subtitle subTitle={subTitle} /> : null}
    </div>
  );
}
