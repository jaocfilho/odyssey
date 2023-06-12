import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const topic = z.string().nullable();

export function Topic() {
  return <TextInput label="Topic" name="topic" type="text" />;
}
