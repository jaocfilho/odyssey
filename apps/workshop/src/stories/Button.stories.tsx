import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'tailwind-ui';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button colorScheme='indigo'>Primary</Button>,
};