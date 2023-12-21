import type { Meta, StoryObj } from '@storybook/react';

import {
  Button as ButtonComponent,
  buttonColorOptions,
} from 'cosmic-ui/components/button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: buttonColorOptions,
    },
  },
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
    color: 'blue',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => <ButtonComponent {...args} />,
};
