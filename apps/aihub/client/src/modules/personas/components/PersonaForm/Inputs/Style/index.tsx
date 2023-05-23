import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const styleOptions = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

export const style = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .optional()
  .transform((style) => {
    if (style) return style.value;
  });

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
