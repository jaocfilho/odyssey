import { z } from 'zod';

import { answer_size } from './AnswerSize';
import { description } from './Description';
import { domain } from './Domain';
import { level_of_detail } from './LevelOfDetail';
import { name } from './Name';
import { style } from './Style';
import { target_audience } from './TargetAudience';
import { temperature } from './Temperature';
import { topic } from './Topic';
import { tone } from './Tone';
import { language_complexity } from './LanguageComplexity';
import { informality } from './Informality';

export const personaSchema = z.object({
  style,
  description,
  temperature,
  domain,
  target_audience,
  topic,
  level_of_detail,
  name,
  tone,
  language_complexity,
  informality,
  answer_size,
});

export type PersonaFormData = z.infer<typeof personaSchema>;
