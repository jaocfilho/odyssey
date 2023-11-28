import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const styleTypes = ['funny', 'professional', 'silly'] as const;
export const styleOptions = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

export const style = z.enum(styleTypes).optional().nullable();

export function Style() {
  return (
    <SelectInput
      label="Style"
      name="style"
      placeholder="Select a style"
      options={styleOptions}
    />
  );
}
