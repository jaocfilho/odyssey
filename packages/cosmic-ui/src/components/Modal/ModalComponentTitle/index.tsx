import { Dialog } from '@headlessui/react';

export type ModalComponentTitleProps = {
  title: string;
};

export function ModalComponentTitle({ title }: ModalComponentTitleProps) {
  return (
    <Dialog.Title
      as="h3"
      className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
    >
      {title}
    </Dialog.Title>
  );
}
