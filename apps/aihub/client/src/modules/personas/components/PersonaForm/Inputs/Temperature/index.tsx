import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const temperature = z
  .string()
  .optional()
  .transform((temperature) => {
    if (temperature) {
      return parseFloat(temperature);
    }
  });

export function Temperature() {
  return <TextInput label="Temperature" name="temperature" type="text" />;
}
