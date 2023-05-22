import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const answerSizeOptions = [
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'long', label: 'Long' },
];

export const answer_size = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .optional()
  .transform((answer_size) => {
    if (answer_size) return answer_size.value;
  });

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
