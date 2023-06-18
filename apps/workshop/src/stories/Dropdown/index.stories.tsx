import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown as DropdownComponent } from 'tailwind-ui';

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Forms/Dropdown',
  component: DropdownComponent,
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

export const Dropdown: Story = {
  render: (args) => <DropdownComponent {...args} />,
};
