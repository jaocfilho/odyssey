import { z } from 'zod';

const variablesSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_API_KEY: z.string(),
  NEXT_PUBLIC_OPENAI_API_KEY: z.string(),
});

variablesSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variablesSchema> {}
  }
}
