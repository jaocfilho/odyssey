import { z } from 'zod';

export const kanbanCardSchema = z.object({
  title: z.string(),
});
