import { z } from 'zod';

import { domain } from './Domain';
import { style } from './Style';
import { target_audience } from './TargetAudience';
import { temperature } from './Temperature';

export const gpt35RefinementSchema = z.object({
  style,
  temperature,
  domain,
  target_audience,
});

export type Gpt35RefinementFormData = z.infer<typeof gpt35RefinementSchema>;
