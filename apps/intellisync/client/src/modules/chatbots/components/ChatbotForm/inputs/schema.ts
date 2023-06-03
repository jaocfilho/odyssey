import { z } from 'zod';

import { name } from './Name';

export const chatbotSchema = z.object({ name });

export type ChatbotFormData = z.infer<typeof chatbotSchema>;
