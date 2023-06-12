import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from 'tailwind-ui';

const meta: Meta<typeof InputComponent> = {
  title: 'Components/Forms/Input',
  component: InputComponent,
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  render: (args) => <InputComponent {...args} />,
};
