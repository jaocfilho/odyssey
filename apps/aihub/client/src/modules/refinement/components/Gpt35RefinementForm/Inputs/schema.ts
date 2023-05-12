import { z } from 'zod';

import { vibe } from './Vibe';
import { temperature } from './Temperature';

export const gpt35RefinementSchema = z.object({
  vibe,
  temperature,
});

export type Gpt35RefinementFormData = z.infer<typeof gpt35RefinementSchema>;
