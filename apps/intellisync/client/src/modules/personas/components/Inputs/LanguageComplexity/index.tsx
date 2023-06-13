import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const languageComplexityTypes = [
  'simple',
  'moderate',
  'advanced',
  'technical',
  'layman terms',
  'jargon',
  'slang',
] as const;
export const languageComplexityOptions = [
  { value: 'simple', label: 'Simple' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'technical', label: 'Technical' },
  { value: 'layman terms', label: 'Layman Terms' },
  { value: 'jargon', label: 'Jargon' },
  { value: 'slang', label: 'Slang' },
];

export const language_complexity = z
  .enum(languageComplexityTypes)
  .optional()
  .nullable();

export function LanguageComplexity() {
  return (
    <SelectInput
      label="Language complexity"
      name="language_complexity"
      placeholder="Select a language complexity"
      options={languageComplexityOptions}
    />
  );
}
