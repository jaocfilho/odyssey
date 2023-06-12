import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/Inputs';

export const target_audience = z.string().nullable();

export function TargetAudience() {
  return (
    <TextInput label="Target audience" name="target_audience" type="text" />
  );
}
