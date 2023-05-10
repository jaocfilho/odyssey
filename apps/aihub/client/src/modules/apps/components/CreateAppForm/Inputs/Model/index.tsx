import { z } from 'zod';

import { Form } from '@/modules/forms/components';

const options = [{ value: 'gpt-3.5-turbo', label: 'GPT 3.5 turbo' }];

export const model = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .default(options[0])
  .transform((model) => model.value);

export function ModelInput() {
  return (
    <Form.Field>
      <Form.Select label="Select a model" name="model" options={options} />
    </Form.Field>
  );
}
