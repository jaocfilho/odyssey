import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const toneTypes = [
  'friendly',
  'professional',
  'casual',
  'authoritative',
  'humorous',
  'empathetic',
  'serious',
  'optimistic',
  'neutral',
] as const;
export const toneOptions = [
  { value: 'friendly', label: 'Friendly' },
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'authoritative', label: 'Authoritative' },
  { value: 'humorous', label: 'Humorous' },
  { value: 'empathetic', label: 'Empathetic' },
  { value: 'serious', label: 'Serious' },
  { value: 'optimistic', label: 'Optimistic' },
  { value: 'neutral', label: 'Neutral' },
];

export const tone = z.enum(toneTypes).nullable();

export function Tone() {
  return (
    <SelectInput
      label="Tone"
      name="tone"
      placeholder="Select a tone"
      options={toneOptions}
    />
  );
}
