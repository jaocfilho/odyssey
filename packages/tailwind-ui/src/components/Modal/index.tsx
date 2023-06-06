'use client';

import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { ModalComponentOverlay } from './ModalComponentOverlay';
import { ModalComponentButtonsArea } from './ModalComponentButtonsArea';
import { ModalComponentTitle } from './ModalComponentTitle';
import { ModalComponentPanel } from './ModalComponentPanel';
import { ModalComponentIcon } from './ModalComponentIcon';
import { ModalComponentContainer } from './ModalComponentContainer';
import { ModalComponentMessage } from './ModalComponentMessage';

type ModalProps = {
  title: string;
  message: string;
  open: boolean;
  onClose: () => void;
  confirmButton: string;
  cancelButton?: string | undefined;
  onCancel?: () => void;
  onConfirm?: () => void;
};

export function Modal({
  confirmButton,
  onCancel,
  onConfirm,
  message,
  open,
  title,
  onClose,
  cancelButton,
}: ModalProps) {
  const handleCancel = () => {
    if (!!onCancel) {
      onCancel();
    }
    onClose();
  };

  const handleConfirm = () => {
    if (!!onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <ModalComponentOverlay />

        <ModalComponentContainer>
          <ModalComponentPanel>
            <div className="sm:flex sm:items-start">
              <ModalComponentIcon />
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <ModalComponentTitle title={title} />
                <ModalComponentMessage message={message} />
              </div>
            </div>
            <ModalComponentButtonsArea
              confirmButton={confirmButton}
              cancelButton={cancelButton}
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
          </ModalComponentPanel>
        </ModalComponentContainer>
      </Dialog>
    </Transition.Root>
  );
}
