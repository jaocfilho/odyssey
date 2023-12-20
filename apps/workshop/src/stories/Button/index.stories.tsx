import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from 'cosmic-ui/button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Forms/Button',
  component: ButtonComponent,
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => <ButtonComponent {...args} />,
};
