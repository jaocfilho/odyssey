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
  .default(styleOptions[0])
  .transform((style) => style.value);

export function Style() {
  return <SelectInput label="Style" name="style" options={styleOptions} />;
}
