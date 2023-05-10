'use client';

import { Fragment, ReactNode, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

interface ComponentDrawerContainerProps {
  children: ReactNode;
}

export function ComponentDrawerContainer({
  children,
}: ComponentDrawerContainerProps) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {children}
      </Dialog>
    </Transition.Root>
  );
}
