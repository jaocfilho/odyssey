import { Fragment, ReactNode } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '../../../utils';

const panelCommonStyles = 'pointer-events-auto w-screen dark:bg-grayScheme-900';

const sizeVariantsStyles = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

type DrawerPanelSizeVariants = keyof typeof sizeVariantsStyles;

const graySchemeVariantsStyles = {
  default: 'bg-white dark:bg-grayScheme-900',
  gray: 'bg-white dark:bg-gray-900',
  slate: 'bg-white dark:bg-slate-900',
  stone: 'bg-white dark:bg-stone-900',
  zinc: 'bg-white dark:bg-zinc-900',
  neutral: 'bg-white dark:bg-neutral-900',
};

type DrawerPanelGraySchemeVariants = keyof typeof graySchemeVariantsStyles;

export type DrawerPanelStylesProps = {
  size?: DrawerPanelSizeVariants;
  grayScheme?: DrawerPanelGraySchemeVariants;
};

function drawerPanelStyles({
  size = 'md',
  grayScheme = 'default',
}: DrawerPanelStylesProps) {
  return classNames(
    panelCommonStyles,
    sizeVariantsStyles[size],
    graySchemeVariantsStyles[grayScheme]
  );
}

type ComponentDrawerPanelProps = DrawerPanelStylesProps & {
  children: ReactNode;
};

export function ComponentDrawerPanel({
  children,
  size,
  grayScheme,
}: ComponentDrawerPanelProps) {
  const styles = drawerPanelStyles({ size, grayScheme });

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
              <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  );
}
