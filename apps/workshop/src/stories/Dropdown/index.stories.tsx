import type { Meta, StoryObj } from '@storybook/react';

import { Menu as MenuComponent } from 'tailwind-ui';

const meta: Meta<typeof MenuComponent> = {
  title: 'Components/Overlay/Menu',
  component: MenuComponent,
  args: {
    button: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Primary: Story = {
  name: 'Primary',
  render: (args) => <MenuComponent {...args} />,
};

export const WithHeader: Story = {
  name: 'With header',
  render: (args) => (
    <MenuComponent
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
