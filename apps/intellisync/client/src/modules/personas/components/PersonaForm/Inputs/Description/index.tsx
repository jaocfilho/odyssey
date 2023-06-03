import { z } from 'zod';

import { TextAreaInput } from '@/modules/forms/components/Inputs';

export const description = z.string().optional();

export function Description() {
  return <TextAreaInput label="Add description" name="description" rows={4} />;
}
