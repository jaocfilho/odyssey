import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const domain = z.string().optional().nullable();

export function Domain() {
  return <TextInput label="Domain" name="domain" />;
}
