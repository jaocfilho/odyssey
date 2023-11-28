import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const levelOfDetailTypes = [
  'summarized',
  'balanced',
  'exploratory',
  'comprehensive',
  'step-by-step',
  'examplesIllustrations',
  'definitionsConcepts',
  'referencesCitations',
  'expertLevel',
] as const;
export const levelOfDetailOptions = [
  { value: 'summarized', label: 'Summarized' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'exploratory', label: 'Exploratory' },
  { value: 'comprehensive', label: 'Comprehensive' },
  { value: 'step-by-step', label: 'Step-by-Step' },
  { value: 'examplesIllustrations', label: 'Examples and Illustrations' },
  { value: 'definitionsConcepts', label: 'Definitions and Concepts' },
  { value: 'referencesCitations', label: 'References and Citations' },
  { value: 'expertLevel', label: 'Expert-Level' },
];

export const level_of_detail = z.enum(levelOfDetailTypes).optional().nullable();

export function LevelOfDetail() {
  return (
    <SelectInput
      label="Level of detail"
      name="level_of_detail"
      placeholder="Select a level of detail"
      options={levelOfDetailOptions}
    />
  );
}
