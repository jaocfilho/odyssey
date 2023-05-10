'use client';

import { ReactNode, useState } from 'react';

import { ComponentDrawer } from './ComponentDrawer';
import { type ComponentDrawerFooterProps } from './ComponentDrawerFooter';
import { type ComponentDrawerHeaderProps } from './ComponentDrawerHeader';
import { type ComponentDrawerTriggerProps } from './ComponentDrawerTrigger';

type DrawerProps = ComponentDrawerHeaderProps &
  ComponentDrawerFooterProps &
  Pick<ComponentDrawerTriggerProps, 'trigger'> & {
    children: ReactNode;
  };

export function Drawer({
  title,
  subTitle,
  trigger,
  onCancel,
  children,
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
          <ComponentDrawer.Footer onCancel={handleClose} />
        </ComponentDrawer.Panel>
      </ComponentDrawer.Container>
    </>
  );
}
