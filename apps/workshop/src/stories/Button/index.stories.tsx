import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from 'tailwind-ui';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => <ButtonComponent {...args} />,
};
