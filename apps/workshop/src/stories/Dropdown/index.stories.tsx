import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown as DropdownComponent } from 'tailwind-ui';

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Overlay/Dropdown',
  component: DropdownComponent,
  args: {
    button: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

export const WithHeader: Story = {
  name: 'With header',
  render: (args) => (
    <DropdownComponent
      buttonProps={{ colorScheme: 'gray' }}
      {...args}
      header={
        <div className="px-4 py-3">
          <p className="text-sm">Signed in as</p>
          <p className="truncate text-sm font-medium text-gray-900">
            tom@example.com
          </p>
        </div>
      }
    />
  ),
};
