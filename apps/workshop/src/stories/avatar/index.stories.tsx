import type { Meta, StoryObj } from '@storybook/react';

import { Avatar as AvatarComponent } from 'cosmic-ui/components/avatar';

const meta: Meta<typeof AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  args: {
    square: false,
    initials: 'JD',
  },
};

export default meta;

type Story = StoryObj<typeof AvatarComponent>;

export const Avatar: Story = {
  render: (args) => <AvatarComponent {...args} />,
};
