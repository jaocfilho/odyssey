import { z } from 'zod';

import { Form } from '@/modules/forms/components';

const options = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

export const style = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .default(options[0])
  .transform((style) => style.value);

export function Style() {
  return (
    <Form.Field>
      <Form.Select label="Style" name="style" options={options} />
    </Form.Field>
  );
}
