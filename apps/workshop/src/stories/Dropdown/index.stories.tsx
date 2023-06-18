import type { Meta, StoryObj } from '@storybook/react';

import { Menu as MenuComponent, MenuItem } from 'tailwind-ui';

const meta: Meta<typeof MenuComponent> = {
  title: 'Components/Overlay/Menu',
  component: MenuComponent,
  args: {
    button: 'Button',
    colorScheme: 'gray',
  },
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Simple: Story = {
  name: 'Simple',
  render: (args) => (
    <MenuComponent {...args}>
      <div className="py-1">
        <MenuItem>Account settings</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>License</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </div>
    </MenuComponent>
  ),
};

export const WithDividers: Story = {
  name: 'With dividers',
  render: (args) => (
    <MenuComponent {...args}>
      <div className="py-1">
        <MenuItem>Account settings</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>License</MenuItem>
      </div>
      <div className="py-1">
        <MenuItem>Sign out</MenuItem>
      </div>
    </MenuComponent>
  ),
};

export const WithHeader: Story = {
  name: 'With header',
  render: (args) => (
    <MenuComponent
      {...args}
      header={
        <div className="px-4 py-3">
          <p className="text-sm dark:text-grayScheme-400">Signed in as</p>
          <p className="truncate text-sm font-medium text-gray-900 dark:text-grayScheme-200">
            tom@example.com
          </p>
        </div>
      }
    >
      <div className="py-1">
        <MenuItem>Account settings</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>License</MenuItem>
      </div>
      <div className="py-1">
        <MenuItem>Sign out</MenuItem>
      </div>
    </MenuComponent>
  ),
};
