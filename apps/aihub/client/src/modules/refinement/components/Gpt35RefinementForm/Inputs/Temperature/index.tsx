import { z } from 'zod';

import { TextInput } from '@/modules/forms/components/TextInput';

export const temperature = z.string();

export function Temperature() {
  return <TextInput label="Temperature" name="temperature" type="text" />;
}
