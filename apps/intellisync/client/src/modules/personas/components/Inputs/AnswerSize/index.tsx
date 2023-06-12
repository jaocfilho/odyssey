import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const answerSizeTypes = ['short', 'medium', 'long'] as const;
export const answerSizeOptions = [
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'long', label: 'Long' },
];

export const answer_size = z.enum(answerSizeTypes).nullable();

export function AnswerSize() {
  return (
    <SelectInput
      label="Answer size"
      name="answer_size"
      placeholder="Select an answer size"
      options={answerSizeOptions}
    />
  );
}
