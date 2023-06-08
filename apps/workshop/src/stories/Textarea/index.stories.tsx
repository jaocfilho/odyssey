import type { Meta, StoryObj } from '@storybook/react';

import { Textarea as TextareaComponent } from 'tailwind-ui';

const meta: Meta<typeof TextareaComponent> = {
  title: 'Components/Textarea',
  component: TextareaComponent,
  args: {},
};

export default meta;

type Story = StoryObj<typeof TextareaComponent>;

export const Textarea: Story = {
  render: (args) => <TextareaComponent {...args} />,
};
