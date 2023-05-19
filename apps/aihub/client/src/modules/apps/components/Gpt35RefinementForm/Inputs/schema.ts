import { z } from 'zod';

import { style } from './Style';
import { temperature } from './Temperature';

export const gpt35RefinementSchema = z.object({
  style,
  temperature,
});

export type Gpt35RefinementFormData = z.infer<typeof gpt35RefinementSchema>;
