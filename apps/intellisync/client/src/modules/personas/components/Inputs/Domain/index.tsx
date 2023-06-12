import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const domain = z.string().nullable();

export function Domain() {
  return <TextInput label="Domain" name="domain" />;
}
