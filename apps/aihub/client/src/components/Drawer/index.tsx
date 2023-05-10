'use client';

import { ReactNode } from 'react';

import { ComponentDrawer } from './ComponentDrawer';
import { ComponentDrawerFooterProps } from './ComponentDrawerFooter';
import { ComponentDrawerHeaderProps } from './ComponentDrawerHeader';

type DrawerProps = ComponentDrawerHeaderProps &
  ComponentDrawerFooterProps & {
    children: ReactNode;
  };

export function Drawer({ title, subTitle, onCancel, children }: DrawerProps) {
  return (
    <ComponentDrawer.Container>
      <ComponentDrawer.Overlay />
      <ComponentDrawer.Panel>
        <ComponentDrawer.Header title={title} subTitle={subTitle} />
        <ComponentDrawer.Content>{children}</ComponentDrawer.Content>
        <ComponentDrawer.Footer onCancel={onCancel} />
      </ComponentDrawer.Panel>
    </ComponentDrawer.Container>
  );
}
