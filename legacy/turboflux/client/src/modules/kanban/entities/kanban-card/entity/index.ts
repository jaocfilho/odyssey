import { v4 as uuidv4 } from 'uuid';

import { z } from 'zod';

export const kanbanCardSchema = z.object({
  id: z.string().uuid().default(uuidv4()),
  title: z.string(),
});

type TKanbanCardSchema = typeof kanbanCardSchema;
export type KanbanCardInput = z.input<TKanbanCardSchema>;
export type KanbanCard = z.output<TKanbanCardSchema>;
export type KanbanCards = KanbanCard[];
