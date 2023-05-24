import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const name = z
  .string()
  .min(3, 'Name must contain at least 3 character(s)');

export function Name() {
  return (
    <TextInput
      label="Name"
      name="name"
      placeholder="Persona name"
      type="text"
    />
  );
}
