import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from 'cosmic-ui';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Forms/Button',
  component: ButtonComponent,
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
    href: '',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => <ButtonComponent {...args} />,
};
