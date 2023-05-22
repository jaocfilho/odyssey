import { z } from 'zod';

import { domain } from './Domain';
import { level_of_detail } from './LevelOfDetail';
import { style } from './Style';
import { target_audience } from './TargetAudience';
import { temperature } from './Temperature';
import { topic } from './Topic';
import { tone } from './Tone';

export const gpt35RefinementSchema = z.object({
  style,
  temperature,
  domain,
  target_audience,
  topic,
  level_of_detail,
  tone,
});

export type Gpt35RefinementFormData = z.infer<typeof gpt35RefinementSchema>;
