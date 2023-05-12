'use client';

import { ReactNode } from 'react';

import { useBooleanState } from '@odyssey/react-hooks';
import { ComponentDrawer } from './ComponentDrawer';
import { type ComponentDrawerFooterProps } from './ComponentDrawerFooter';
import { type ComponentDrawerHeaderProps } from './ComponentDrawerHeader';
import { type ComponentDrawerTriggerProps } from './ComponentDrawerTrigger';

export type DrawerProps = ComponentDrawerHeaderProps &
  Pick<ComponentDrawerFooterProps, 'actionButton'> &
  Pick<ComponentDrawerTriggerProps, 'triggerComponent'> & {
    children: ReactNode;
    onCancel?: () => void;
  };

export function Drawer({
  title,
  subTitle,
  triggerComponent,
  onCancel,
  children,
  actionButton,
}: DrawerProps) {
  const [open, setClose, setOpen] = useBooleanState();
  const handleClose = () => {
    if (!!onCancel) {
      onCancel();
    }
    setClose();
  };

  return (
    <>
      <ComponentDrawer.Trigger
        openDrawer={setOpen}
        triggerComponent={triggerComponent}
      />

      <ComponentDrawer.Container open={open} onClose={handleClose}>
        <ComponentDrawer.Overlay />
        <ComponentDrawer.Panel>
          <ComponentDrawer.Header title={title} subTitle={subTitle} />
          <ComponentDrawer.Content>{children}</ComponentDrawer.Content>
          <ComponentDrawer.Footer
            actionButton={actionButton}
            onClose={handleClose}
          />
        </ComponentDrawer.Panel>
      </ComponentDrawer.Container>
    </>
  );
}
