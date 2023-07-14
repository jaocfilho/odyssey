import type { Meta, StoryObj } from '@storybook/react';

import { Drawer as DrawerComponent, Button } from 'tailwind-ui';

const meta: Meta<typeof DrawerComponent> = {
  title: 'Components/Overlay/Drawer',
  component: DrawerComponent,
  args: {
    title: 'Drawer title (optional)',
    subTitle: 'Drawer subtitle (optional)',
  },
};

export default meta;

type Story = StoryObj<typeof DrawerComponent>;

export const Drawer: Story = {
  name: 'Drawer',
  render: (args) => (
    <DrawerComponent
      {...args}
      triggerComponent={(openDrawer) => (
        <Button onClick={openDrawer}>Open drawer</Button>
      )}
      actionButton={(closeDrawer) => (
        <Button onClick={closeDrawer}>Action</Button>
      )}
    />
  ),
};
