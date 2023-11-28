import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const topic = z.string().optional().nullable();

export function Topic() {
  return <TextInput label="Topic" name="topic" type="text" />;
}
