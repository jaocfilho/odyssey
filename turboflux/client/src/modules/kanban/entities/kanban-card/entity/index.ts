import { randomUUID } from 'node:crypto';

import { z } from 'zod';

export const kanbanCardSchema = z.object({
  id: z.string().uuid().default(randomUUID()),
  title: z.string(),
});

type TKanbanCardSchema = typeof kanbanCardSchema;
export type KanbanCardInput = z.input<TKanbanCardSchema>;
export type KanbanCard = z.output<TKanbanCardSchema>;
export type KanbanCards = KanbanCard[];
