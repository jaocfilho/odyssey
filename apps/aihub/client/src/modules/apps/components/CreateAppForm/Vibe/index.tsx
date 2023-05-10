import { z } from 'zod';

import { Form } from '@/modules/forms/components';

const options = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

export const vibe = z
  .object({
    value: z.string(),
    label: z.string(),
  })
  .default(options[0])
  .transform((vibe) => vibe.value);

export function Vibe() {
  return (
    <Form.Field>
      <Form.Select label="Add a vibe" name="vibe" options={options} />
    </Form.Field>
  );
}
