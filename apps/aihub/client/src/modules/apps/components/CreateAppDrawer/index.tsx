'use client';

import { Drawer, type DrawerProps } from '@/components/Drawer';
import { Content } from './Content';
import { ActionButton } from './ActionButton';

type CreateAppDrawerProps = Pick<DrawerProps, 'trigger'>;

export function CreateAppDrawer({ trigger }: CreateAppDrawerProps) {
  return (
    <Drawer
      title="Create a new app"
      trigger={trigger}
      actionButton={(closeDrawer) => <ActionButton closeDrawer={closeDrawer} />}
    >
      <Content />
    </Drawer>
  );
}
