import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const options = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

export const style = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .default(options[0])
  .transform((style) => style.value);

export function Style() {
  return <SelectInput label="Style" name="style" options={options} />;
}
