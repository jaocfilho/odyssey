'use client';

import { ReactNode, useState } from 'react';

import { ComponentDrawer } from './ComponentDrawer';
import { type ComponentDrawerFooterProps } from './ComponentDrawerFooter';
import { type ComponentDrawerHeaderProps } from './ComponentDrawerHeader';
import { type ComponentDrawerTriggerProps } from './ComponentDrawerTrigger';

type DrawerProps = ComponentDrawerHeaderProps &
  Pick<ComponentDrawerFooterProps, 'successButton'> &
  Pick<ComponentDrawerTriggerProps, 'trigger'> & {
    children: ReactNode;
    onCancel?: () => void;
  };

export function Drawer({
  title,
  subTitle,
  trigger,
  onCancel,
  children,
  successButton,
}: DrawerProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (!!onCancel) {
      onCancel();
    }
    setOpen(false);
  };

  return (
    <>
      <ComponentDrawer.Trigger openDrawer={handleOpen} trigger={trigger} />

      <ComponentDrawer.Container open={open} onClose={handleClose}>
        <ComponentDrawer.Overlay />
        <ComponentDrawer.Panel>
          <ComponentDrawer.Header title={title} subTitle={subTitle} />
          <ComponentDrawer.Content>{children}</ComponentDrawer.Content>
          <ComponentDrawer.Footer
            successButton={successButton}
            onClose={handleClose}
          />
        </ComponentDrawer.Panel>
      </ComponentDrawer.Container>
    </>
  );
}
