import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const informalityTypes = [
  'formal',
  'neutral',
  'casual',
  'informal',
  'slang',
] as const;
export const informalityOptions = [
  { value: 'formal', label: 'Formal' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'casual', label: 'Casual' },
  { value: 'informal', label: 'Informal' },
  { value: 'slang', label: 'Slang' },
];

export const informality = z.enum(informalityTypes).nullable();

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
