import type { Meta, StoryObj } from '@storybook/react';

import { AvatarButton as AvatarButtonComponent } from 'cosmic-ui/components/avatar-button';

const meta: Meta<typeof AvatarButtonComponent> = {
  title: 'Components/Avatar',
  component: AvatarButtonComponent,
  args: {
    square: false,
    initials: 'JD',
  },
};

export default meta;

type Story = StoryObj<typeof AvatarButtonComponent>;

export const AvatarButton: Story = {
  render: (args) => <AvatarButtonComponent {...args} />,
};
