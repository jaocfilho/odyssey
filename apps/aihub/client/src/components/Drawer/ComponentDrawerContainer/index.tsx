'use client';

import { Fragment, ReactNode } from 'react';

import { Dialog, Transition } from '@headlessui/react';

type ComponentDrawerContainerProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export function ComponentDrawerContainer({
  children,
  open,
  onClose,
}: ComponentDrawerContainerProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {children}
      </Dialog>
    </Transition.Root>
  );
}
