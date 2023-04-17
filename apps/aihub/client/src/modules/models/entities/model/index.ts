import { z } from 'zod';

const model = z.object({
  name: z.string(),
  vibe: z.string(),
  context: z.string(),
});

export type Model = z.infer<typeof model>;
