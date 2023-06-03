import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const informalityOptions = [
  { value: 'formal', label: 'Formal' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'casual', label: 'Casual' },
  { value: 'informal', label: 'Informal' },
  { value: 'slang', label: 'Slang' },
];

export const informality = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .optional()
  .transform((informality) => {
    if (informality) return informality.value;
  });

export function Informality() {
  return (
    <SelectInput
      label="Informality"
      name="informality"
      placeholder="Select an informality option"
      options={informalityOptions}
    />
  );
}
