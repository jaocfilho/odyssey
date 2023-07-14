import type { Meta, StoryObj } from '@storybook/react';

import {
  Drawer as DrawerComponent,
  Button,
  type DrawerProps,
} from 'tailwind-ui';

const meta: Meta<typeof DrawerComponent> = {
  title: 'Components/Overlay/Drawer',
  component: DrawerComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'] as DrawerProps['size'][],
      },
    },
  },
  args: {
    title: 'Drawer title (optional)',
    subTitle: 'Drawer subtitle (optional)',
    size: 'md',
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
