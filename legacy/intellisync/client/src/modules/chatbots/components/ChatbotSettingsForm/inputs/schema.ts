import { z } from 'zod';

import { model } from './Model';
import { temperature } from './Temperature';

export const chatbotSettingsSchema = z.object({ model, temperature });

export type ChatbotSettingsFormData = z.infer<typeof chatbotSettingsSchema>;
