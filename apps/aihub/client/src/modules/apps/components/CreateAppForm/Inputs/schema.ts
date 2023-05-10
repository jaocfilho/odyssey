import { z } from 'zod';

import { description } from './Description';
import { model } from './Model';
import { name } from './Name';

export const createAppFormSchema = z.object({
  name,
  model,
  description,
});

export type CreateAppFormData = z.infer<typeof createAppFormSchema>;
