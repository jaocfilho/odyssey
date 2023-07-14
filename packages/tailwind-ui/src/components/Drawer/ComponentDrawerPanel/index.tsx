import { Fragment, ReactNode } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '../../../utils';

const panelCommonStyles = 'pointer-events-auto w-screen';

const sizeVariantsStyles = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

type DrawerPanelSizeVariants = keyof typeof sizeVariantsStyles;

type DrawerPanelStylesProps = {
  size?: DrawerPanelSizeVariants;
};

function drawerPanelStyles({ size = 'md' }: DrawerPanelStylesProps) {
  return classNames(panelCommonStyles, sizeVariantsStyles[size]);
}

interface ComponentDrawerPanelProps {
  children: ReactNode;
}

export function ComponentDrawerPanel({ children }: ComponentDrawerPanelProps) {
  const styles = drawerPanelStyles({});

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className={styles}>
              <div className="flex h-full flex-col overflow-y-scroll dark:bg-grayScheme-900 shadow-xl">
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  );
}
