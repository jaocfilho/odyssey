import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';

const modelOptions = [{ value: 'gpt-3.5-turbo', label: 'GPT 3.5 turbo' }];

export const model = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .required()
  .transform((model) => model.value);

export function Model() {
  return (
    <SelectInput
      label="Model"
      name="model"
      placeholder="Select a model"
      options={modelOptions}
    />
  );
}
