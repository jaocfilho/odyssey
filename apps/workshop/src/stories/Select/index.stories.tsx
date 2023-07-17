import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  ColorSchemeVariants,
  GraySchemeVariants,
  Select as SelectComponent,
} from 'tailwind-ui';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
];

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/Forms/Select',
  component: SelectComponent,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: [
          'emerald',
          'indigo',
          'error',
          'default',
        ] as ColorSchemeVariants[],
      },
    },
    grayScheme: {
      control: {
        type: 'select',
        options: [
          'gray',
          'neutral',
          'zinc',
          'default',
          'slate',
          'stone',
        ] as GraySchemeVariants[],
      },
    },
  },
  args: {
    options,
    placeholder: 'Placeholder',
    label: 'Label',
    colorScheme: 'default',
    grayScheme: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (option: any) => {
      setValue(option);
    };

    return <SelectComponent {...args} onChange={handleChange} value={value} />;
  },
};
