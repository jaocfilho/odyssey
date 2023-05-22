import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const levelOfDetailOptions = [
  { value: 'summarized', label: 'Summarized' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'exploratory', label: 'Exploratory' },
  { value: 'comprehensive', label: 'Comprehensive' },
  { value: 'stepByStep', label: 'Step-by-Step' },
  { value: 'examplesIllustrations', label: 'Examples and Illustrations' },
  { value: 'definitionsConcepts', label: 'Definitions and Concepts' },
  { value: 'referencesCitations', label: 'References and Citations' },
  { value: 'expertLevel', label: 'Expert-Level' },
];

export const level_of_detail = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .optional()
  .transform((levelOfDetail) => {
    if (levelOfDetail) return levelOfDetail.value;
  });

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
