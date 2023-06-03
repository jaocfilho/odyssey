import { z } from 'zod';

import { TextAreaInput } from '@/modules/forms/components/Inputs';

export const description = z.string().optional();

export function DescriptionInput() {
  return <TextAreaInput label="Add description" name="description" rows={4} />;
}
