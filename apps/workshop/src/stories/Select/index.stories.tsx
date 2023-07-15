import type { Meta, StoryObj } from '@storybook/react';

import { Select as SelectComponent } from 'tailwind-ui';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
];

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/Forms/Select',
  component: SelectComponent,
  args: {
    options,
    placeholder: 'Placeholder',
    label: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {
  render: (args) => <SelectComponent {...args} />,
};
